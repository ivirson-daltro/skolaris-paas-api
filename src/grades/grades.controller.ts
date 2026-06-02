import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { GradesService } from './grades.service';
import { CreateGradeDto, UpdateGradeDto } from './dtos/grade.dto';

@Controller('grades')
export class GradesController {
  constructor(private service: GradesService) {}

  @Post()
  async create(@Body() dto: CreateGradeDto) {
    return this.service.createGrade(dto);
  }

  @Get('student/:studentId')
  async findByStudent(@Param('studentId') studentId: string) {
    return this.service.getGradesByStudent(studentId);
  }

  @Get('subject/:subjectId')
  async findBySubject(@Param('subjectId') subjectId: string) {
    return this.service.getGradesBySubject(subjectId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.getGradeById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateGradeDto) {
    return this.service.updateGrade(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.deleteGrade(id);
    return { message: 'Nota deletada com sucesso' };
  }
}
