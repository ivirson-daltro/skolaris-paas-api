import {
  IsUUID,
  IsNumber,
  IsDateString,
  IsOptional,
  IsEnum,
} from 'class-validator';

enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  LATE = 'LATE',
}

export class CreateMonthlyFeeDto {
  @IsUUID()
  studentId: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}

export class UpdateMonthlyFeeDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}

export class MonthlyFeeResponseDto {
  id: string;
  studentId: string;
  amount: number;
  dueDate: string;
  paymentDate?: string;
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}

export class CreatePayableDto {
  description: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  supplier?: string;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}

export class UpdatePayableDto {
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  supplier?: string;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}

export class PayableResponseDto {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  paymentDate?: string;
  supplier?: string;
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}

enum CashFlowType {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
}

export class CreateCashFlowDto {
  @IsEnum(CashFlowType)
  type: CashFlowType;

  @IsOptional()
  description?: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  date: string;

  @IsOptional()
  @IsUUID()
  monthlyFeeId?: string;

  @IsOptional()
  @IsUUID()
  payableId?: string;

  @IsOptional()
  @IsUUID()
  teacherPaymentId?: string;
}

export class CashFlowResponseDto {
  id: string;
  type: CashFlowType;
  description?: string;
  amount: number;
  date: string;
  monthlyFeeId?: string;
  payableId?: string;
  teacherPaymentId?: string;
  createdAt: string;
  updatedAt: string;
}

export class FinancialSettingsDto {
  latePaymentInterest?: number;
  earlyPaymentDiscount?: number;
  defaultDueDate?: number;
}

export class CreateTeacherContractDto {
  @IsUUID()
  teacherId: string;

  @IsDateString()
  hireDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsEnum(['EMPLOYEE', 'CONTRACTOR', 'FREELANCER', 'INTERN'])
  type: string;

  @IsOptional()
  weeklyHours?: number;

  @IsNumber()
  baseSalary: number;

  @IsOptional()
  benefits?: string;

  @IsOptional()
  active?: boolean;
}

export class UpdateTeacherContractDto {
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  weeklyHours?: number;

  @IsOptional()
  @IsNumber()
  baseSalary?: number;

  @IsOptional()
  benefits?: string;

  @IsOptional()
  active?: boolean;
}

export class TeacherContractResponseDto {
  id: string;
  teacherId: string;
  hireDate: string;
  endDate?: string;
  type: string;
  weeklyHours?: number;
  baseSalary: number;
  benefits?: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export class CreateTeacherPaymentDto {
  @IsUUID()
  contractId: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}

export class UpdateTeacherPaymentDto {
  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsDateString()
  paymentDate?: string;

  @IsOptional()
  @IsEnum(PaymentStatus)
  status?: PaymentStatus;
}

export class TeacherPaymentResponseDto {
  id: string;
  contractId: string;
  amount: number;
  dueDate: string;
  paymentDate?: string;
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}
