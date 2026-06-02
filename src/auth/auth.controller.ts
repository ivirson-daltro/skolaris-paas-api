import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UpdateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { CreateRoleDto, UpdateRoleDto } from './dtos/role.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // ==================== LOGIN ====================

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  // ==================== USERS ====================

  @Post('users')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Get('users')
  async getAllUsers() {
    return this.authService.getAllUsers();
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string) {
    return this.authService.getUser(id);
  }

  @Put('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.authService.updateUser(id, updateUserDto);
  }

  @Delete('users/:id')
  async deleteUser(@Param('id') id: string) {
    await this.authService.deleteUser(id);
    return { message: 'Usuário deletado com sucesso' };
  }

  // ==================== ROLES ====================

  @Post('roles')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.authService.createRole(createRoleDto);
  }

  @Get('roles')
  async getAllRoles() {
    return this.authService.getAllRoles();
  }

  @Get('roles/:id')
  async getRole(@Param('id') id: string) {
    return this.authService.getRole(id);
  }

  @Put('roles/:id')
  async updateRole(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ) {
    return this.authService.updateRole(id, updateRoleDto);
  }

  @Delete('roles/:id')
  async deleteRole(@Param('id') id: string) {
    await this.authService.deleteRole(id);
    return { message: 'Role deletada com sucesso' };
  }
}
