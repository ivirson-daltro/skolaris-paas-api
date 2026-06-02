export interface CreateUserDto {
  name: string;
  email: string;
  passwordHash: string;
  roleId: string;
  active?: boolean;
}

export interface UpdateUserDto {
  name?: string;
  email?: string;
  passwordHash?: string;
  roleId?: string;
  active?: boolean;
}
