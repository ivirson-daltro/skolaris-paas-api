import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto, UpdateSubjectDto } from './dtos/subject.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(private service: SubjectsService) {}

  @Post()
  async create(@Body() dto: CreateSubjectDto) {
    return this.service.createSubject(dto);
  }

  @Get()
  async findAll() {
    return this.service.getAllSubjects();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.getSubjectById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateSubjectDto) {
    return this.service.updateSubject(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.deleteSubject(id);
    return { message: 'Disciplina deletada com sucesso' };
  }

  @Post(':teacherId/subjects/:subjectId')
  async assignTeacher(
    @Param('teacherId') teacherId: string,
    @Param('subjectId') subjectId: string,
  ) {
    return this.service.assignTeacherToSubject(teacherId, subjectId);
  }

  @Delete(':teacherId/subjects/:subjectId')
  async removeTeacher(
    @Param('teacherId') teacherId: string,
    @Param('subjectId') subjectId: string,
  ) {
    await this.service.removeTeacherFromSubject(teacherId, subjectId);
    return { message: 'Professor removido da disciplina com sucesso' };
  }
}
