import { Injectable, BadRequestException } from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';

@Injectable()
export class AuditService {
  constructor(private supabaseService: SupabaseService) {}

  async getAuditLogs(tableName?: string, recordId?: string) {
    let query: any = this.supabaseService.instance
      .from('audit_log')
      .select('*');

    if (tableName || recordId) {
      const filters: any = {};
      if (tableName) filters.tableName = tableName;
      if (recordId) filters.recordId = recordId;
      query = this.supabaseService.instance
        .from('audit_log')
        .select('*')
        .eq('tableName', tableName);
    }

    const { data, error } = await query;
    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getAuditLogsByUser(userId: string) {
    const { data, error } = await this.supabaseService.instance
      .from('audit_log')
      .select('*')
      .eq('changedBy', userId);

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }

  async getAuditLogsByTable(tableName: string) {
    const { data, error } = await this.supabaseService.instance
      .from('audit_log')
      .select('*')
      .eq('tableName', tableName);

    if (error) throw new BadRequestException(error.message);
    return data || [];
  }
}
