import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { type User, UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: string) {
    const upperRole = role?.toUpperCase() as User['role'];
    return this.usersService.findAll(upperRole);
  }
  @Get('interns')
  findAllInterns() {
    return this.usersService.findAll('INTERN');
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }
  @Patch(':id')
  patch(@Param('id') id: string, @Body() user: User) {
    return this.usersService.update(+id, user);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
