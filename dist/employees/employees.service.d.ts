import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class EmployeesService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createEmployeeDto: Prisma.EmployeeCreateInput): string;
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): string;
    findOne(id: string): string;
    update(id: string, updateEmployeeDto: Prisma.EmployeeUpdateInput): string;
    remove(id: string): string;
}
