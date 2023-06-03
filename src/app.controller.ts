import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { AppService, GetIpInfoParam } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIpInfo(@Query() query: GetIpInfoParam) {
    if (!query.ip)
      throw new HttpException('IP is required', HttpStatus.BAD_REQUEST);
    return this.appService.getIpInfo(query.ip);
  }
}
