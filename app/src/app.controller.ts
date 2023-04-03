import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './interfaces/user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  getUsers(): User[] {
    return this.appService.find();
  }

  @Get('users/:id')
  getUserById(@Param('id') id: number): User {
    return this.appService.findById(id);
  }
}