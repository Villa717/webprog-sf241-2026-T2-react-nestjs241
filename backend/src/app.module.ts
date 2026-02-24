import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 1. Import this
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestbookModule } from './guestbook/guestbook.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 2. This makes .env variables available everywhere
    }),
    GuestbookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
