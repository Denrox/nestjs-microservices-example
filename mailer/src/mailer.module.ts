import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerController } from './mailer.controller.js';
import { MailerConfigService } from './services/config/mailer-config.service.js';
import { ConfigService } from './services/config/config.service.js';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfigService,
    }),
  ],
  providers: [ConfigService],
  controllers: [MailerController],
})
export class AppMailerModule {}
