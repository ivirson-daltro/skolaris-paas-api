# DTOs - Referência Completa

## 📋 Estrutura de DTOs Gerados

### 🔐 Auth Module (`src/auth/dtos/`)

#### user.dto.ts

```typescript
CreateUserDto {
  name: string
  email: string
  password: string
  roleId: string (UUID)
  active?: boolean
}

UpdateUserDto {
  name?: string
  email?: string
  password?: string
  roleId?: string (UUID)
  active?: boolean
}

UserResponseDto {
  id: string
  name: string
  email: string
  roleId: string
  active: boolean
  createdAt: string
  updatedAt: string
}
```

#### role.dto.ts

```typescript
CreateRoleDto {
  name: string
  description?: string
}

UpdateRoleDto {
  name?: string
  description?: string
}

RoleResponseDto {
  id: string
  name: string
  description?: string
  createdAt: string
  updatedAt: string
}
```

#### guardian.dto.ts

```typescript
CreateGuardianDto {
  name: string
  cpf?: string
  rg?: string
  phone?: string
  email?: string
  address?: string
}

UpdateGuardianDto {
  name?: string
  cpf?: string
  rg?: string
  phone?: string
  email?: string
  address?: string
  active?: boolean
}

GuardianResponseDto {
  id: string
  name: string
  cpf?: string
  rg?: string
  phone?: string
  email?: string
  address?: string
  active: boolean
  createdAt: string
  updatedAt: string
}
```

---

### 👨‍🎓 Students Module (`src/students/dtos/`)

#### student.dto.ts

```typescript
CreateStudentDto {
  name: string
  enrollmentCode: string
  birthDate: string (ISO date)
  cpf?: string
  rg?: string
  address?: string
  phone?: string
  email?: string
  classId?: string (UUID)
  active?: boolean
}

UpdateStudentDto {
  name?: string
  enrollmentCode?: string
  birthDate?: string
  cpf?: string
  rg?: string
  address?: string
  phone?: string
  email?: string
  classId?: string (UUID)
  active?: boolean
}

StudentResponseDto {
  id: string
  name: string
  enrollmentCode: string
  birthDate: string
  cpf?: string
  rg?: string
  address?: string
  phone?: string
  email?: string
  classId?: string
  registrationDate: string
  active: boolean
  createdAt: string
  updatedAt: string
}
```

#### student-guardian.dto.ts

```typescript
StudentGuardianDto {
  studentId: string (UUID)
  guardianIds: string[] (UUIDs)
}

StudentGuardianResponseDto {
  studentId: string
  guardianId: string
}
```

---

### 👨‍🏫 Teachers Module (`src/teachers/dtos/`)

#### teacher.dto.ts

```typescript
CreateTeacherDto {
  name: string
  cpf: string
  rg?: string
  birthDate?: string (ISO date)
  phone?: string
  email: string
  address?: string
  degree?: string (graduação, mestrado, doutorado)
  expertise?: string
  active?: boolean
}

UpdateTeacherDto {
  name?: string
  cpf?: string
  rg?: string
  birthDate?: string
  phone?: string
  email?: string
  address?: string
  degree?: string
  expertise?: string
  active?: boolean
}

TeacherResponseDto {
  id: string
  name: string
  cpf: string
  rg?: string
  birthDate?: string
  phone?: string
  email: string
  address?: string
  degree?: string
  expertise?: string
  active: boolean
  createdAt: string
  updatedAt: string
}
```

---

### 🏫 Classes Module (`src/classes/dtos/`)

#### class.dto.ts

```typescript
CreateTurnoDto {
  name: string
  active?: boolean
}

UpdateTurnoDto {
  name?: string
  active?: boolean
}

TurnoResponseDto {
  id: string
  name: string
  active: boolean
  createdAt: string
  updatedAt: string
}

CreateClassDto {
  name: string
  grade: number (1-12)
  shiftId: string (UUID)
  active?: boolean
}

UpdateClassDto {
  name?: string
  grade?: number
  shiftId?: string (UUID)
  active?: boolean
}

ClassResponseDto {
  id: string
  name: string
  grade: number
  shiftId: string
  active: boolean
  createdAt: string
  updatedAt: string
}
```

---

### 📚 Subjects Module (`src/subjects/dtos/`)

#### subject.dto.ts

```typescript
CreateSubjectDto {
  name: string
  workload?: number
}

UpdateSubjectDto {
  name?: string
  workload?: number
}

SubjectResponseDto {
  id: string
  name: string
  workload?: number
  createdAt: string
  updatedAt: string
}

TeacherSubjectDto {
  teacherId: string
  subjectIds: string[]
}

TeacherSubjectResponseDto {
  teacherId: string
  subjectId: string
}
```

#### shift.dto.ts

```typescript
CreateShiftDto {
  name: string (ex: "2024.1", "2024.2")
}

UpdateShiftDto {
  name: string
}

ShiftResponseDto {
  id: string
  name: string
}
```

---

### 📊 Grades Module (`src/grades/dtos/`)

#### grade.dto.ts

```typescript
CreateGradeDto {
  studentId: string (UUID)
  subjectId: string (UUID)
  grade: number (0-10)
  periodId: string (UUID)
}

UpdateGradeDto {
  grade?: number
}

GradeResponseDto {
  id: string
  studentId: string
  subjectId: string
  grade: number
  periodId: string
  createdAt: string
  updatedAt: string
}
```

---

### 💰 Finances Module (`src/finances/dtos/`)

#### finance.dto.ts

**Monthly Fees**

```typescript
CreateMonthlyFeeDto {
  studentId: string (UUID)
  amount: number
  dueDate: string (ISO date)
  paymentDate?: string
  status?: 'PENDING' | 'PAID' | 'LATE'
}

UpdateMonthlyFeeDto {
  amount?: number
  dueDate?: string
  paymentDate?: string
  status?: 'PENDING' | 'PAID' | 'LATE'
}

MonthlyFeeResponseDto {
  id: string
  studentId: string
  amount: number
  dueDate: string
  paymentDate?: string
  status: 'PENDING' | 'PAID' | 'LATE'
  createdAt: string
  updatedAt: string
}
```

**Payables**

```typescript
CreatePayableDto {
  description: string
  amount: number
  dueDate: string (ISO date)
  paymentDate?: string
  supplier?: string
  status?: 'PENDING' | 'PAID' | 'LATE'
}

UpdatePayableDto {
  description?: string
  amount?: number
  dueDate?: string
  paymentDate?: string
  supplier?: string
  status?: 'PENDING' | 'PAID' | 'LATE'
}

PayableResponseDto {
  id: string
  description: string
  amount: number
  dueDate: string
  paymentDate?: string
  supplier?: string
  status: 'PENDING' | 'PAID' | 'LATE'
  createdAt: string
  updatedAt: string
}
```

**Cash Flow**

```typescript
CreateCashFlowDto {
  type: 'ENTRADA' | 'SAIDA'
  description?: string
  amount: number
  date: string (ISO date)
  monthlyFeeId?: string (UUID)
  payableId?: string (UUID)
  teacherPaymentId?: string (UUID)
}

CashFlowResponseDto {
  id: string
  type: 'ENTRADA' | 'SAIDA'
  description?: string
  amount: number
  date: string
  monthlyFeeId?: string
  payableId?: string
  teacherPaymentId?: string
  createdAt: string
  updatedAt: string
}
```

**Financial Settings**

```typescript
FinancialSettingsDto {
  latePaymentInterest?: number
  earlyPaymentDiscount?: number
  defaultDueDate?: number (1-31)
}
```

**Teacher Contracts**

```typescript
CreateTeacherContractDto {
  teacherId: string (UUID)
  hireDate: string (ISO date)
  endDate?: string (ISO date)
  type: 'EMPLOYEE' | 'CONTRACTOR' | 'FREELANCER' | 'INTERN'
  weeklyHours?: number
  baseSalary: number
  benefits?: string
  active?: boolean
}

UpdateTeacherContractDto {
  endDate?: string
  weeklyHours?: number
  baseSalary?: number
  benefits?: string
  active?: boolean
}

TeacherContractResponseDto {
  id: string
  teacherId: string
  hireDate: string
  endDate?: string
  type: string
  weeklyHours?: number
  baseSalary: number
  benefits?: string
  active: boolean
  createdAt: string
  updatedAt: string
}
```

**Teacher Payments**

```typescript
CreateTeacherPaymentDto {
  contractId: string (UUID)
  amount: number
  dueDate: string (ISO date)
  paymentDate?: string
  status?: 'PENDING' | 'PAID' | 'LATE'
}

UpdateTeacherPaymentDto {
  amount?: number
  dueDate?: string
  paymentDate?: string
  status?: 'PENDING' | 'PAID' | 'LATE'
}

TeacherPaymentResponseDto {
  id: string
  contractId: string
  amount: number
  dueDate: string
  paymentDate?: string
  status: 'PENDING' | 'PAID' | 'LATE'
  createdAt: string
  updatedAt: string
}
```

---

### 📝 Audit Module (`src/audit/dtos/`)

#### audit-log.dto.ts

```typescript
AuditLogResponseDto {
  id: string
  tableName: string
  recordId: string
  action: 'INSERT' | 'UPDATE' | 'DELETE'
  oldData?: Record<string, any>
  newData?: Record<string, any>
  changedBy: string (user ID)
  changedAt: string
}
```

---

## 🎯 Como Usar DTOs

### Em um Controller

```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from './dtos/student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private service: StudentsService) {}

  @Post()
  async create(@Body() dto: CreateStudentDto) {
    return this.service.create(dto);
  }
}
```

### Em um Service

```typescript
import { Injectable, BadRequestException } from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import { CreateStudentDto, UpdateStudentDto } from './dtos/student.dto';

@Injectable()
export class StudentsService {
  constructor(private supabase: SupabaseService) {}

  async create(dto: CreateStudentDto) {
    const { data, error } = await this.supabase.insert('students', dto);
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }

  async update(id: string, dto: UpdateStudentDto) {
    const { data, error } = await this.supabase.update('students', id, dto);
    if (error) throw new BadRequestException(error.message);
    return data?.[0];
  }
}
```

---

## ✅ Validações Automáticas

Cada DTO usa `class-validator` para validação automática:

```typescript
@IsString()        // Valida se é string
@IsEmail()         // Valida se é email válido
@IsUUID()          // Valida se é UUID válido
@IsNumber()        // Valida se é número
@IsInt()           // Valida se é inteiro
@IsDateString()    // Valida se é data ISO válida
@IsOptional()      // Campo opcional
@IsBoolean()       // Valida se é booleano
@IsEnum(Enum)      // Valida se está no enum
@IsArray()         // Valida se é array
```

---

## 📁 Estrutura de Diretórios

```
src/
├── auth/
│   └── dtos/
│       ├── user.dto.ts
│       ├── role.dto.ts
│       └── guardian.dto.ts
├── students/
│   └── dtos/
│       ├── student.dto.ts
│       └── student-guardian.dto.ts
├── teachers/
│   └── dtos/
│       └── teacher.dto.ts
├── classes/
│   └── dtos/
│       └── class.dto.ts
├── subjects/
│   └── dtos/
│       ├── subject.dto.ts
│       └── shift.dto.ts
├── grades/
│   └── dtos/
│       └── grade.dto.ts
├── finances/
│   └── dtos/
│       └── finance.dto.ts
└── audit/
    └── dtos/
        └── audit-log.dto.ts
```

---

## 🔧 Próximos Passos

1. **Criar Modules** para cada feature
2. **Criar Controllers** para cada feature
3. **Implementar Services** com SupabaseService
4. **Adicionar Validação Global** (ValidationPipe no main.ts)
5. **Testar com Postman/Insomnia**
