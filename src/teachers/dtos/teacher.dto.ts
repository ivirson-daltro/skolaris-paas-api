export interface CreateTeacherDto {
  name: string;
  cpf: string;
  rg?: string;
  birthDate?: Date;
  phone?: string;
  email: string;
  address?: string;
  degree?: string;
  expertise?: string;
}

export interface UpdateTeacherDto {
  name?: string;
  cpf?: string;
  rg?: string;
  birthDate?: Date;
  phone?: string;
  email?: string;
  address?: string;
  degree?: string;
  expertise?: string;
  active?: boolean;
}
