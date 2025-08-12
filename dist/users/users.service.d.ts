export interface User {
    id: number;
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
export declare class UsersService {
    private users;
    findAll(role?: User['role']): User[];
    findOne(id: number): User[];
    create(user: Omit<User, 'id'>): void;
    update(id: number, updateUser: Partial<User>): User[];
    delete(id: User['id']): User[];
}
