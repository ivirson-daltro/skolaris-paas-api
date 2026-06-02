import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import {
  CreateMonthlyFeeDto,
  UpdateMonthlyFeeDto,
  CreatePayableDto,
  UpdatePayableDto,
  CreateCashFlowDto,
  CreateTeacherContractDto,
  UpdateTeacherContractDto,
  CreateTeacherPaymentDto,
  UpdateTeacherPaymentDto,
} from './dtos/finance.dto';

@Injectable()
export class FinancesService {
  constructor(private supabaseService: SupabaseService) {}

  // ==================== MONTHLY FEES ====================

  async createMonthlyFee(dto: CreateMonthlyFeeDto) {
    const { data, error } = await this.supabaseService.instance
      .from('monthly_fees')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getMonthlyFeesByStudent(studentId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('monthly_fees')
      .select('*')
      .eq('student_id', studentId);
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async updateMonthlyFee(id: string, dto: UpdateMonthlyFeeDto) {
    const { data, error } = await this.supabaseService.instance
      .from('monthly_fees')
      .update({
        ...dto,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  // ==================== PAYABLES ====================

  async createPayable(dto: CreatePayableDto) {
    const { data, error } = await this.supabaseService.instance
      .from('payables')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getAllPayables(limit = 10, offset = 0) {
    const { data, error } = await this.supabaseService.instance
      .from('payables')
      .select('*');

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async updatePayable(id: string, dto: UpdatePayableDto) {
    const { data, error } = await this.supabaseService.instance
      .from('payables')
      .update({
        ...dto,
        updated_at: new Date().toISOString(),
      });
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  // ==================== CASH FLOW ====================

  async createCashFlow(dto: CreateCashFlowDto) {
    const { data, error } = await this.supabaseService.instance
      .from('cash_flow')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getCashFlowByDate(startDate: string, endDate: string) {
    const { data, error } = await this.supabaseService.instance
      .from('cash_flow')
      .select('*')
      .gte('date', startDate)
      .lte('date', endDate);
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  // ==================== TEACHER CONTRACTS ====================

  async createTeacherContract(dto: CreateTeacherContractDto) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_contracts')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getTeacherContracts(teacherId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_contracts')
      .select('*')
      .eq('teacher_id', teacherId);
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async updateTeacherContract(id: string, dto: UpdateTeacherContractDto) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_contracts')
      .update({
        ...dto,
        updatedAt: new Date().toISOString(),
      })
      .eq('id', id)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  // ==================== TEACHER PAYMENTS ====================

  async createTeacherPayment(dto: CreateTeacherPaymentDto) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_payments')
      .insert(dto)
      .select();
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async getTeacherPaymentsByContract(contractId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_payments')
      .select('*')
      .eq('contract_id', contractId);
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async updateTeacherPayment(id: string, dto: UpdateTeacherPaymentDto) {
    const { data, error } = await this.supabaseService.instance
      .from('teachers_payments')
      .update({
        ...dto,
        updatedAt: new Date().toISOString(),
      });
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }
}
