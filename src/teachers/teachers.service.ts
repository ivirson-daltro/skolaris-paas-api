import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import {
  CreateTeacherDto,
  UpdateTeacherDto,
  TeacherResponseDto,
} from './dtos/create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(private supabaseService: SupabaseService) {}

  async create(
    createTeacherDto: CreateTeacherDto,
  ): Promise<TeacherResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('teachers')
      .insert(createTeacherDto)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async findAll(limit = 10, offset = 0): Promise<TeacherResponseDto[]> {
    const { data, error } = await this.supabaseService.instance
      .from('teachers')
      .select('*');

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async findOne(id: string): Promise<TeacherResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('teachers')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Professor não encontrado');

    return data[0];
  }

  async findByUserId(userId: string): Promise<TeacherResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('teachers')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Professor não encontrado');

    return data[0];
  }

  async findByDepartment(department: string): Promise<TeacherResponseDto[]> {
    const { data, error } = await this.supabaseService.instance
      .from('teachers')
      .select('*')
      .eq('department', department);

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async update(
    id: string,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<TeacherResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('teachers')
      .update({
        ...updateTeacherDto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async remove(id: string): Promise<void> {
    const { error } = await this.supabaseService.instance
      .from('teachers')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }
}
