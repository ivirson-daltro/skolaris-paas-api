import { Controller, Get, Post, Body, Param, Put, Query } from '@nestjs/common';
import { FinancesService } from './finances.service';
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

@Controller('finances')
export class FinancesController {
  constructor(private service: FinancesService) {}

  // ==================== MONTHLY FEES ====================

  @Post('monthly-fees')
  async createMonthlyFee(@Body() dto: CreateMonthlyFeeDto) {
    return this.service.createMonthlyFee(dto);
  }

  @Get('monthly-fees/student/:studentId')
  async getMonthlyFeesByStudent(@Param('studentId') studentId: string) {
    return this.service.getMonthlyFeesByStudent(studentId);
  }

  @Put('monthly-fees/:id')
  async updateMonthlyFee(
    @Param('id') id: string,
    @Body() dto: UpdateMonthlyFeeDto,
  ) {
    return this.service.updateMonthlyFee(id, dto);
  }

  // ==================== PAYABLES ====================

  @Post('payables')
  async createPayable(@Body() dto: CreatePayableDto) {
    return this.service.createPayable(dto);
  }

  @Get('payables')
  async getAllPayables(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
  ) {
    return this.service.getAllPayables(limit, offset);
  }

  @Put('payables/:id')
  async updatePayable(@Param('id') id: string, @Body() dto: UpdatePayableDto) {
    return this.service.updatePayable(id, dto);
  }

  // ==================== CASH FLOW ====================

  @Post('cash-flow')
  async createCashFlow(@Body() dto: CreateCashFlowDto) {
    return this.service.createCashFlow(dto);
  }

  @Get('cash-flow')
  async getCashFlowByDate(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.service.getCashFlowByDate(startDate, endDate);
  }

  // ==================== TEACHER CONTRACTS ====================

  @Post('teacher-contracts')
  async createTeacherContract(@Body() dto: CreateTeacherContractDto) {
    return this.service.createTeacherContract(dto);
  }

  @Get('teacher-contracts/:teacherId')
  async getTeacherContracts(@Param('teacherId') teacherId: string) {
    return this.service.getTeacherContracts(teacherId);
  }

  @Put('teacher-contracts/:id')
  async updateTeacherContract(
    @Param('id') id: string,
    @Body() dto: UpdateTeacherContractDto,
  ) {
    return this.service.updateTeacherContract(id, dto);
  }

  // ==================== TEACHER PAYMENTS ====================

  @Post('teacher-payments')
  async createTeacherPayment(@Body() dto: CreateTeacherPaymentDto) {
    return this.service.createTeacherPayment(dto);
  }

  @Get('teacher-payments/:contractId')
  async getTeacherPaymentsByContract(@Param('contractId') contractId: string) {
    return this.service.getTeacherPaymentsByContract(contractId);
  }

  @Put('teacher-payments/:id')
  async updateTeacherPayment(
    @Param('id') id: string,
    @Body() dto: UpdateTeacherPaymentDto,
  ) {
    return this.service.updateTeacherPayment(id, dto);
  }
}
