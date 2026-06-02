import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { SubjectsModule } from './subjects/subjects.module';
import { GradesModule } from './grades/grades.module';
import { FinancesModule } from './finances/finances.module';
import { AuditModule } from './audit/audit.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    StudentsModule,
    TeachersModule,
    ClassesModule,
    SubjectsModule,
    GradesModule,
    FinancesModule,
    AuditModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
