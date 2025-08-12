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

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'Intern' | 'Engineer' | 'Admin') {
    return 'That is all';
  }
  @Get('interns')
  findAllInterns() {
    return ['bappi'];
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post()
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id')
  patch(@Param('id') id: string, @Body() user: {}) {
    return { id, ...user };
  }
  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return { id, message: 'deleted' };
  }
}
