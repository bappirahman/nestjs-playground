import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
@Injectable()
export class UsersService {
  private users: User[] = [
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

  findAll(role?: User['role']): User[] {
    console.log(role);
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number): User[] {
    return this.users.filter((user) => user.id === id);
  }
  create(user: Omit<User, 'id'>) {
    if (Object.keys(user).length) {
      throw new Error("user can't be empty");
    }
    try {
      const userByHighestId = [...this.users].sort(
        (a: User, b: User) => b.id - a!.id,
      );
      const newUser: User = {
        id: userByHighestId[0].id! + 1,
        ...user,
      };
    } catch (error) {
      console.error(error);
    }
  }
  update(id: number, updateUser: Partial<User>): User[] {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUser };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: User['id']): User[] {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
