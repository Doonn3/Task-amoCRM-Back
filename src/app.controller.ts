import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // МОЕ ЛАЛ
  @Post('app/deal/create')
  createDeal() {
    return this.appService.getHello();
  }
}
