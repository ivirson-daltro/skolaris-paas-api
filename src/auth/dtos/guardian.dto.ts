import { IsString, IsOptional, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateGuardianDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;
}

export class UpdateGuardianDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  active?: boolean;
}

export class GuardianResponseDto {
  id: string;
  name: string;
  cpf?: string;
  rg?: string;
  phone?: string;
  email?: string;
  address?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
