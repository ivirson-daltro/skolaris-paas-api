import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto, UpdateClassDto } from './dtos/class.dto';

@Controller('classes')
export class ClassesController {
  constructor(private service: ClassesService) {}

  @Post()
  async create(@Body() dto: CreateClassDto) {
    return this.service.createClass(dto);
  }

  @Get()
  async findAll() {
    return this.service.getAllClasses();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.getClassById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateClassDto) {
    return this.service.updateClass(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.service.deleteClass(id);
    return { message: 'Turma deletada com sucesso' };
  }
}
