import { IsUUID, IsArray } from 'class-validator';

export class StudentGuardianDto {
  @IsUUID()
  studentId: string;

  @IsArray()
  guardianIds: string[];
}

export class StudentGuardianResponseDto {
  studentId: string;
  guardianId: string;
}
