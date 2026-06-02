import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { SupabaseService } from '../database/supabase.service';
import {
  CreateUserDto,
  UpdateUserDto,
  UserResponseDto,
} from './dtos/create-user.dto';
import { CreateRoleDto, UpdateRoleDto } from './dtos/role.dto';
import { JwtService } from '@nestjs/jwt';
import { SupabaseResponse } from 'src/database/supabase-response.dto';
import { log } from 'console';
import { LoginResponseDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly jwtService: JwtService,
  ) {}

  // ==================== USERS ====================

  async createUser(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const { data, error } = (await this.supabaseService.instance
      .from('users')
      .insert({
        name: createUserDto.name,
        email: createUserDto.email,
        password_hash: await this.hashPassword(createUserDto.password),
        role_id: createUserDto.roleId,
        active: true,
      })
      .select()
      .single()) as SupabaseResponse<UserResponseDto>;

    if (error) throw new BadRequestException(error.message);

    delete data?.[0].password_hash; // Remover hash da resposta
    return data?.[0];
  }

  async getUser(id: string): Promise<UserResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('users')
      .select('*')
      .eq('id', id);

    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Usuário não encontrado');

    return data[0];
  }

  async getUserByEmail(email: string): Promise<LoginResponseDto | null> {
    const { data, error } = await this.supabaseService.instance
      .from('users')
      .select(
        `
        id,
        name,
        email,
        role_id,
        password_hash,
        active,
        role:roles (
            id,
            name
        )
        `,
      )
      .eq('email', email)
      .single();

    if (error) throw new BadRequestException(error.message);
    return data || null;
  }

  async getAllUsers(limit = 10, offset = 0): Promise<UserResponseDto[]> {
    const { data, error } = await this.supabaseService.instance
      .from('users')
      .select('*');

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const updateData: any = {};
    if (updateUserDto.name) updateData.name = updateUserDto.name;
    if (updateUserDto.email) updateData.email = updateUserDto.email;
    if (updateUserDto.roleId) updateData.role_id = updateUserDto.roleId;
    if (updateUserDto.active !== undefined)
      updateData.active = updateUserDto.active;
    updateData.updated_at = new Date().toISOString();

    const { data, error } = await this.supabaseService.instance
      .from('users')
      .update(updateData)
      .eq('id', id)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async deleteUser(id: string): Promise<void> {
    const { error } = await this.supabaseService.instance
      .from('users')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }

  // ==================== ROLES ====================

  async createRole(createRoleDto: CreateRoleDto) {
    const { data, error } = await this.supabaseService.instance
      .from('roles')
      .insert(createRoleDto)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getRole(id: string) {
    const { data, error } = await this.supabaseService.instance
      .from('roles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Role não encontrada');

    return data[0];
  }

  async getAllRoles() {
    const { data, error } = await this.supabaseService.instance
      .from('roles')
      .select('*');

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async updateRole(id: string, updateRoleDto: UpdateRoleDto) {
    const { data, error } = await this.supabaseService.instance
      .from('roles')
      .update({
        ...updateRoleDto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async deleteRole(id: string): Promise<void> {
    const { error } = await this.supabaseService.instance
      .from('roles')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }

  // ==================== AUTH ====================

  async login(email: string, password: string) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new BadRequestException('Email ou senha incorretos');
    }

    if (!user.active) {
      throw new BadRequestException('Usuário inativo');
    }

    const passwordValid = await this.validatePassword(
      password,
      user.password_hash || '',
    );

    if (!passwordValid) {
      throw new BadRequestException('Email ou senha incorretos');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      roleId: user.role_id,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }

  // ==================== HELPERS ====================

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  private async validatePassword(
    plain: string,
    hash: string,
  ): Promise<boolean> {
    return await compare(plain, hash);
  }
}
