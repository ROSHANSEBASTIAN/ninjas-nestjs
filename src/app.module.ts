import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [NinjasModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
