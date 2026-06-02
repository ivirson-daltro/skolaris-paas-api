import { Controller, Get, Query, Param } from '@nestjs/common';
import { AuditService } from './audit.service';

@Controller('audit')
export class AuditController {
  constructor(private service: AuditService) {}

  @Get()
  async getAuditLogs(
    @Query('tableName') tableName?: string,
    @Query('recordId') recordId?: string,
  ) {
    return this.service.getAuditLogs(tableName, recordId);
  }

  @Get('user/:userId')
  async getAuditLogsByUser(@Param('userId') userId: string) {
    return this.service.getAuditLogsByUser(userId);
  }

  @Get('table/:tableName')
  async getAuditLogsByTable(@Param('tableName') tableName: string) {
    return this.service.getAuditLogsByTable(tableName);
  }
}
