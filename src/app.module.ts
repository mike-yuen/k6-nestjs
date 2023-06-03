import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { Agent } from 'https';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule.register({
      httpsAgent: new Agent({
        rejectUnauthorized: true,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
