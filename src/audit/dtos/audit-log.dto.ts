import { IsUUID, IsEnum, IsOptional, IsObject } from 'class-validator';

enum AuditAction {
  INSERT = 'INSERT',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export class AuditLogResponseDto {
  id: string;
  tableName: string;
  recordId: string;
  action: AuditAction;
  oldData?: Record<string, any>;
  newData?: Record<string, any>;
  changedBy: string;
  changedAt: string;
}
