import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import { CreateSubjectDto, UpdateSubjectDto } from './dtos/subject.dto';

@Injectable()
export class SubjectsService {
  constructor(private supabaseService: SupabaseService) {}

  async createSubject(dto: CreateSubjectDto) {
    const { data, error } = await this.supabaseService.instance
      .from('subjects')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getAllSubjects(limit = 10, offset = 0) {
    const { data, error } = await this.supabaseService.instance
      .from('subjects')
      .select('*');
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getSubjectById(id: string) {
    const { data, error } = await this.supabaseService.instance
      .from('subjects')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Disciplina não encontrada');
    return data[0];
  }

  async updateSubject(id: string, dto: UpdateSubjectDto) {
    const { data, error } = await this.supabaseService.instance
      .from('subjects')
      .update({
        ...dto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async deleteSubject(id: string) {
    const { error } = await this.supabaseService.instance
      .from('subjects')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }

  async assignTeacherToSubject(teacherId: string, subjectId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_subjects')
      .insert({
        teacher_id: teacherId,
        subject_id: subjectId,
      })
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async removeTeacherFromSubject(teacherId: string, subjectId: string) {
    // Para deletar um relacionamento N:N específico, você precisaria usar uma query customizada
    // Por enquanto, usando como exemplo
    const { error } = await this.supabaseService.instance
      .from('teachers_subjects')
      .delete()
      .eq('teacher_id', teacherId)
      .eq('subject_id', subjectId);
    if (error) throw new BadRequestException(error.message);
  }
}
