import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getUser(name: string, email: string, password: string) {
    return { name, email };
  }
}
