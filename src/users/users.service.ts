import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'ENGINEER',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@company.com',
      role: 'ADMIN',
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      role: 'INTERN',
    },
    {
      id: 7,
      name: 'Alex Miller',
      email: 'alex.miller@company.com',
      role: 'ENGINEER',
    },
    {
      id: 8,
      name: 'Lisa Garcia',
      email: 'lisa.garcia@company.com',
      role: 'ENGINEER',
    },
    {
      id: 9,
      name: 'Tom Anderson',
      email: 'tom.anderson@company.com',
      role: 'INTERN',
    },
    {
      id: 10,
      name: 'Anna Martinez',
      email: 'anna.martinez@company.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?) {
    console.log(role);

    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray) throw new NotFoundException('User role not found');
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException("This user doesn't exist");
    }
    return user;
  }
  create(createUserDto: CreateUserDto) {
    if (Object.keys(createUserDto).length) {
      throw new Error("user can't be empty");
    }
    try {
      const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
      const newUser = {
        id: userByHighestId[0].id! + 1,
        ...createUserDto,
      };
    } catch (error) {
      console.error(error);
    }
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
