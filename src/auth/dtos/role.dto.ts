import { IsString, IsOptional, IsUUID } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateRoleDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class RoleResponseDto {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}
