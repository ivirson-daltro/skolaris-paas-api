import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  registrationNumber: string;

  @IsNumber()
  enrollmentYear: number;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  zipCode?: string;

  @IsUUID()
  userId: string;
}

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  registrationNumber?: string;

  @IsOptional()
  @IsNumber()
  enrollmentYear?: number;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  zipCode?: string;
}

export class StudentResponseDto {
  id: string;
  registrationNumber: string;
  enrollmentYear: number;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}
