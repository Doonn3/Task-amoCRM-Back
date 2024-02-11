import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ApiService } from './amoCRM/controllers/api.service';
import { ApiController } from './amoCRM/controllers/api.controlles';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  // controllers: [AppController],
  controllers: [ApiController],
  // providers: [AppService],
  providers: [ApiService],
})
export class AppModule {}
