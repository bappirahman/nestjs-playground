import { type User, UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: string): User[];
    findAllInterns(): User[];
    findOne(id: string): User[];
    create(user: User): void;
    patch(id: string, user: User): User[];
    deleteOne(id: string): User[];
}
