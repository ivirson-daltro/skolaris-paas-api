import { IsEmail, IsString } from 'class-validator';
import { RoleResponseDto } from './role.dto';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class LoginResponseDto {
  user: {
    id: string;
    name: string;
    email: string;
    role: RoleResponseDto;
    active: boolean;
  };
  token: string;
  message: string;
}
