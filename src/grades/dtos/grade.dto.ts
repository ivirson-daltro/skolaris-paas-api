import { IsUUID, IsNumber, IsOptional } from 'class-validator';

export class CreateGradeDto {
  @IsUUID()
  studentId: string;

  @IsUUID()
  subjectId: string;

  @IsNumber()
  grade: number;

  @IsUUID()
  periodId: string;
}

export class UpdateGradeDto {
  @IsOptional()
  @IsNumber()
  grade?: number;
}

export class GradeResponseDto {
  id: string;
  studentId: string;
  subjectId: string;
  grade: number;
  periodId: string;
  createdAt: string;
  updatedAt: string;
}
