import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Engineer',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      role: 'Admin',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      role: 'Intern',
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@company.com',
      role: 'Engineer',
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david.brown@company.com',
      role: 'Admin',
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.davis@company.com',
      role: 'Intern',
    },
    {
      id: 7,
      name: 'Alex Miller',
      email: 'alex.miller@company.com',
      role: 'Engineer',
    },
    {
      id: 8,
      name: 'Lisa Garcia',
      email: 'lisa.garcia@company.com',
      role: 'Engineer',
    },
    {
      id: 9,
      name: 'Tom Anderson',
      email: 'tom.anderson@company.com',
      role: 'Intern',
    },
    {
      id: 10,
      name: 'Anna Martinez',
      email: 'anna.martinez@company.com',
      role: 'Admin',
    },
  ];
}
