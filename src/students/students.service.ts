import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import {
  CreateStudentDto,
  UpdateStudentDto,
  StudentResponseDto,
} from './dtos/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(private supabaseService: SupabaseService) {}

  async create(
    createStudentDto: CreateStudentDto,
  ): Promise<StudentResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('students')
      .insert(createStudentDto)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async findAll(limit = 10, offset = 0): Promise<StudentResponseDto[]> {
    const { data, error } = await this.supabaseService.instance
      .from('students')
      .select('*');

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async findOne(id: string): Promise<StudentResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('students')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Aluno não encontrado');

    return data[0];
  }

  async findByUserId(userId: string): Promise<StudentResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('students')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Aluno não encontrado');

    return data[0];
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<StudentResponseDto> {
    const { data, error } = await this.supabaseService.instance
      .from('students')
      .update({
        ...updateStudentDto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();

    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async remove(id: string): Promise<void> {
    const { error } = await this.supabaseService.instance
      .from('students')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }
}
