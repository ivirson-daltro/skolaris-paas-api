import {
  IsString,
  IsOptional,
  IsInt,
  IsUUID,
  IsBoolean,
} from 'class-validator';

export class CreateTurnoDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class UpdateTurnoDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class TurnoResponseDto {
  id: string;
  name: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export class CreateClassDto {
  @IsString()
  name: string;

  @IsInt()
  grade: number;

  @IsUUID()
  shiftId: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class UpdateClassDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  grade?: number;

  @IsOptional()
  @IsUUID()
  shiftId?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}

export class ClassResponseDto {
  id: string;
  name: string;
  grade: number;
  shiftId: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
