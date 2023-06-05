import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

export class GetUserDto {
  name: string;
  email: string;
  password: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/user')
  getUser(@Body() getUserDto: GetUserDto) {
    const { name, email, password } = getUserDto;
    if (!(name && email && password))
      throw new HttpException('Missing params', HttpStatus.BAD_REQUEST);
    return this.appService.getUser(name, email, password);
  }
}
