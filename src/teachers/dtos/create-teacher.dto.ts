import { IsString, IsOptional, IsUUID } from 'class-validator';

export class CreateTeacherDto {
  @IsString()
  registrationNumber: string;

  @IsString()
  department: string;

  @IsOptional()
  @IsString()
  specialization?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  officeLocation?: string;

  @IsOptional()
  @IsString()
  officeHours?: string;

  @IsUUID()
  userId: string;
}

export class UpdateTeacherDto {
  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  specialization?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  officeLocation?: string;

  @IsOptional()
  @IsString()
  officeHours?: string;
}

export class TeacherResponseDto {
  id: string;
  registrationNumber: string;
  department: string;
  specialization?: string;
  phone?: string;
  officeLocation?: string;
  officeHours?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
