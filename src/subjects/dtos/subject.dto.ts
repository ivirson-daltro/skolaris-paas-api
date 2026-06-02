import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateSubjectDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  workload?: number;
}

export class UpdateSubjectDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  workload?: number;
}

export class SubjectResponseDto {
  id: string;
  name: string;
  workload?: number;
  createdAt: string;
  updatedAt: string;
}

export class TeacherSubjectDto {
  teacherId: string;
  subjectIds: string[];
}

export class TeacherSubjectResponseDto {
  teacherId: string;
  subjectId: string;
}
