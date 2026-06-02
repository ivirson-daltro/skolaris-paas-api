import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GradesController } from './grades.controller';
import { GradesService } from './grades.service';

@Module({
  imports: [DatabaseModule],
  controllers: [GradesController],
  providers: [GradesService],
})
export class GradesModule {}
