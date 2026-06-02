import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import { CreateGradeDto, UpdateGradeDto } from './dtos/grade.dto';

@Injectable()
export class GradesService {
  constructor(private supabaseService: SupabaseService) {}

  async createGrade(dto: CreateGradeDto) {
    const { data, error } = await this.supabaseService.instance
      .from('grades')
      .select('*')
      .eq('student_id', dto.studentId);

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getGradesBySubject(subjectId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('grades')
      .select('*')
      .eq('subject_id', subjectId);

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getGradesByStudent(studentId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('grades')
      .select('*')
      .eq('student_id', studentId);

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getGradeById(id: string) {
    const { data, error } = await this.supabaseService.instance
      .from('grades')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Nota não encontrada');
    return data[0];
  }

  async updateGrade(id: string, dto: UpdateGradeDto) {
    const { data, error } = await this.supabaseService.instance
      .from('grades')
      .update({
        ...dto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async deleteGrade(id: string) {
    const { error } = await this.supabaseService.instance
      .from('grades')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }
}
