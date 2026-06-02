export interface CreateStudentDto {
  name: string;
  enrollmentCode: string;
  birthDate: Date;
  cpf?: string;
  rg?: string;
  address?: string;
  phone?: string;
  email?: string;
  classId: string;
}

export interface UpdateStudentDto {
  name?: string;
  enrollmentCode?: string;
  birthDate?: Date;
  cpf?: string;
  rg?: string;
  address?: string;
  phone?: string;
  email?: string;
  classId?: string;
  active?: boolean;
}
