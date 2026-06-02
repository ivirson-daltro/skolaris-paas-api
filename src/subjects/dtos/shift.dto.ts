import { IsString } from 'class-validator';

export class CreateShiftDto {
  @IsString()
  name: string;
}

export class UpdateShiftDto {
  @IsString()
  name: string;
}

export class ShiftResponseDto {
  id: string;
  name: string;
}
