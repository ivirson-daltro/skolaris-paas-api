import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import { CreateClassDto, UpdateClassDto } from './dtos/class.dto';

@Injectable()
export class ClassesService {
  constructor(private supabaseService: SupabaseService) {}

  async createClass(dto: CreateClassDto) {
    const { data, error } = await this.supabaseService.instance
      .from('classes')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getAllClasses(limit = 10, offset = 0) {
    const { data, error } = await this.supabaseService.instance
      .from('classes')
      .select('*');

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getClassById(id: string) {
    const { data, error } = await this.supabaseService.instance
      .from('classes')
      .select('*')
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
    if (!data || data.length === 0)
      throw new NotFoundException('Turma não encontrada');
    return data[0];
  }

  async updateClass(id: string, dto: UpdateClassDto) {
    const { data, error } = await this.supabaseService.instance
      .from('classes')
      .update({
        ...dto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async deleteClass(id: string) {
    const { error } = await this.supabaseService.instance
      .from('classes')
      .delete()
      .eq('id', id);
    if (error) throw new BadRequestException(error.message);
  }
}
