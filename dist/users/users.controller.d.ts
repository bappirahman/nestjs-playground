import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findAllInterns(): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(createUserDto: CreateUserDto): void;
    patch(id: number, updateUserDto: UpdateUserDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    deleteOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
