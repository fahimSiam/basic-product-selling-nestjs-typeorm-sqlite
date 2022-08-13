import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return 'This action adds a new user';
  }
}
