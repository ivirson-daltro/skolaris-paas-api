# 📋 DTOs Completos - Guia Rápido

## ✅ Status: Todos os DTOs Gerados e Compilando

**Total de DTOs Criados:** 30+  
**Módulos:** 8  
**Controllers:** 8  
**Services:** 8

---

## 🎯 Endpoints Implementados

### 🔐 Auth Module

```
POST   /auth/users                    - Criar usuário
GET    /auth/users                    - Listar usuários
GET    /auth/users/:id                - Obter usuário
PUT    /auth/users/:id                - Atualizar usuário
DELETE /auth/users/:id                - Deletar usuário

POST   /auth/roles                    - Criar role
GET    /auth/roles                    - Listar roles
GET    /auth/roles/:id                - Obter role
PUT    /auth/roles/:id                - Atualizar role
DELETE /auth/roles/:id                - Deletar role

POST   /auth/guardians                - Criar responsável
GET    /auth/guardians                - Listar responsáveis
GET    /auth/guardians/:id            - Obter responsável
PUT    /auth/guardians/:id            - Atualizar responsável
DELETE /auth/guardians/:id            - Deletar responsável
```

### 👨‍🎓 Students Module

```
POST   /students                      - Criar aluno
GET    /students                      - Listar alunos
GET    /students/:id                  - Obter aluno
PUT    /students/:id                  - Atualizar aluno
DELETE /students/:id                  - Deletar aluno

POST   /students/:studentId/guardians/:guardianId   - Vincular responsável
DELETE /students/:studentId/guardians/:guardianId   - Desvinc responsável
```

### 👨‍🏫 Teachers Module

```
POST   /teachers                      - Criar professor
GET    /teachers                      - Listar professores
GET    /teachers/:id                  - Obter professor
PUT    /teachers/:id                  - Atualizar professor
DELETE /teachers/:id                  - Deletar professor
```

### 🏫 Classes Module

```
POST   /classes                       - Criar turma
GET    /classes                       - Listar turmas
GET    /classes/:id                   - Obter turma
PUT    /classes/:id                   - Atualizar turma
DELETE /classes/:id                   - Deletar turma

POST   /subjects/turnos               - Criar turno (manhã/tarde/noite)
GET    /subjects/turnos               - Listar turnos
```

### 📚 Subjects Module

```
POST   /subjects                      - Criar disciplina
GET    /subjects                      - Listar disciplinas
GET    /subjects/:id                  - Obter disciplina
PUT    /subjects/:id                  - Atualizar disciplina
DELETE /subjects/:id                  - Deletar disciplina

POST   /subjects/:teacherId/subjects/:subjectId         - Vincular professor
DELETE /subjects/:teacherId/subjects/:subjectId         - Desvinc professor
```

### 📊 Grades Module

```
POST   /grades                        - Criar nota
GET    /grades/student/:studentId     - Notas do aluno
GET    /grades/subject/:subjectId     - Notas da disciplina
GET    /grades/:id                    - Obter nota
PUT    /grades/:id                    - Atualizar nota
DELETE /grades/:id                    - Deletar nota
```

### 💰 Finances Module

```
POST   /finances/monthly-fees         - Criar mensalidade
GET    /finances/monthly-fees/student/:studentId
PUT    /finances/monthly-fees/:id     - Atualizar mensalidade

POST   /finances/payables             - Criar conta a pagar
GET    /finances/payables             - Listar contas
PUT    /finances/payables/:id         - Atualizar conta

POST   /finances/cash-flow            - Registrar fluxo de caixa
GET    /finances/cash-flow?startDate=&endDate=

POST   /finances/teacher-contracts    - Criar contrato professor
GET    /finances/teacher-contracts/:teacherId
PUT    /finances/teacher-contracts/:id

POST   /finances/teacher-payments     - Registrar pagamento
GET    /finances/teacher-payments/:contractId
PUT    /finances/teacher-payments/:id
```

### 📝 Audit Module

```
GET    /audit                         - Listar auditoria
GET    /audit/user/:userId            - Auditoria por usuário
GET    /audit/table/:tableName        - Auditoria por tabela
```

---

## 📦 DTOs Disponíveis

### Auth

- ✅ CreateUserDto, UpdateUserDto, UserResponseDto
- ✅ CreateRoleDto, UpdateRoleDto, RoleResponseDto
- ✅ CreateGuardianDto, UpdateGuardianDto, GuardianResponseDto

### Students

- ✅ CreateStudentDto, UpdateStudentDto, StudentResponseDto
- ✅ StudentGuardianDto, StudentGuardianResponseDto

### Teachers

- ✅ CreateTeacherDto, UpdateTeacherDto, TeacherResponseDto

### Classes

- ✅ CreateTurnoDto, UpdateTurnoDto, TurnoResponseDto
- ✅ CreateClassDto, UpdateClassDto, ClassResponseDto

### Subjects

- ✅ CreateSubjectDto, UpdateSubjectDto, SubjectResponseDto
- ✅ TeacherSubjectDto, TeacherSubjectResponseDto
- ✅ CreateShiftDto, UpdateShiftDto, ShiftResponseDto

### Grades

- ✅ CreateGradeDto, UpdateGradeDto, GradeResponseDto

### Finances

- ✅ CreateMonthlyFeeDto, UpdateMonthlyFeeDto, MonthlyFeeResponseDto
- ✅ CreatePayableDto, UpdatePayableDto, PayableResponseDto
- ✅ CreateCashFlowDto, CashFlowResponseDto
- ✅ FinancialSettingsDto
- ✅ CreateTeacherContractDto, UpdateTeacherContractDto, TeacherContractResponseDto
- ✅ CreateTeacherPaymentDto, UpdateTeacherPaymentDto, TeacherPaymentResponseDto

### Audit

- ✅ AuditLogResponseDto

---

## 🚀 Exemplos de Uso

### Criar um Aluno

```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "enrollmentCode": "2024001",
    "birthDate": "2010-05-15",
    "email": "joao@example.com",
    "classId": "uuid-da-turma"
  }'
```

### Criar Mensalidade

```bash
curl -X POST http://localhost:3000/finances/monthly-fees \
  -H "Content-Type: application/json" \
  -d '{
    "studentId": "uuid-do-aluno",
    "amount": 500.00,
    "dueDate": "2024-06-30"
  }'
```

### Registrar Nota

```bash
curl -X POST http://localhost:3000/grades \
  -H "Content-Type: application/json" \
  -d '{
    "studentId": "uuid-do-aluno",
    "subjectId": "uuid-da-disciplina",
    "grade": 8.5,
    "periodId": "uuid-do-periodo"
  }'
```

---

## 📋 Estrutura de Diretórios

```
src/
├── auth/
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── auth.controller.ts
│   └── dtos/
│       ├── user.dto.ts
│       ├── role.dto.ts
│       └── guardian.dto.ts
├── students/
│   ├── students.module.ts
│   ├── students.service.ts
│   ├── students.controller.ts
│   └── dtos/
│       ├── student.dto.ts
│       └── student-guardian.dto.ts
├── teachers/
│   ├── teachers.module.ts
│   ├── teachers.service.ts
│   ├── teachers.controller.ts
│   └── dtos/
│       └── teacher.dto.ts
├── classes/
│   ├── classes.module.ts
│   ├── classes.service.ts
│   ├── classes.controller.ts
│   └── dtos/
│       └── class.dto.ts
├── subjects/
│   ├── subjects.module.ts
│   ├── subjects.service.ts
│   ├── subjects.controller.ts
│   └── dtos/
│       ├── subject.dto.ts
│       └── shift.dto.ts
├── grades/
│   ├── grades.module.ts
│   ├── grades.service.ts
│   ├── grades.controller.ts
│   └── dtos/
│       └── grade.dto.ts
├── finances/
│   ├── finances.module.ts
│   ├── finances.service.ts
│   ├── finances.controller.ts
│   └── dtos/
│       └── finance.dto.ts
├── audit/
│   ├── audit.module.ts
│   ├── audit.service.ts
│   ├── audit.controller.ts
│   └── dtos/
│       └── audit-log.dto.ts
└── database/
    └── supabase.service.ts
```

---

## ✨ Validações Automáticas

Todos os DTOs usam `class-validator` para validação:

```typescript
@IsString()       // Deve ser texto
@IsEmail()        // Deve ser email válido
@IsUUID()         // Deve ser UUID
@IsNumber()       // Deve ser número
@IsInt()          // Deve ser inteiro
@IsDateString()   // Deve ser data ISO
@IsOptional()     // Campo opcional
@IsBoolean()      // Deve ser booleano
@IsEnum(Enum)     // Deve estar no enum
@IsArray()        // Deve ser array
```

Exemplo de validação automática:

```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João",
    "enrollmentCode": "2024001",
    "birthDate": "data-inválida"  # ❌ Erro: deve ser data ISO
  }'

# Response:
# {
#   "message": ["birthDate must be a valid ISO 8601 date string"],
#   "error": "Bad Request",
#   "statusCode": 400
# }
```

---

## 🔧 Integração com SupabaseService

Todos os Services usam `SupabaseService` que fornece métodos:

```typescript
// SELECT
await supabase.select('students', {
  limit: 10,
  offset: 0,
  order: { column: 'name' },
});

// INSERT
await supabase.insert('students', studentData);

// UPDATE
await supabase.update('students', id, updateData);

// DELETE
await supabase.delete('students', id);

// COUNT
await supabase.count('students');

// RPC (stored procedures)
await supabase.rpc('myFunction', { param: 'value' });
```

---

## 🎯 Próximos Passos

- [ ] Adicionar autenticação JWT
- [ ] Criar guards de permissão
- [ ] Adicionar paginação global
- [ ] Implementar soft deletes
- [ ] Adicionar triggers de auditoria automática
- [ ] Criar testes unitários
- [ ] Documentar com Swagger/OpenAPI
- [ ] Configurar CORS
- [ ] Rate limiting

---

## ✅ Verificação Final

```bash
# Compilar
npm run build

# Executar testes
npm run test

# Iniciar em desenvolvimento
npm run start:dev
```

**Status:** ✅ Tudo compilando e pronto para usar!
