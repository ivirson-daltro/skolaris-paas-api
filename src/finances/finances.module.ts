import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { FinancesController } from './finances.controller';
import { FinancesService } from './finances.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FinancesController],
  providers: [FinancesService],
})
export class FinancesModule {}
