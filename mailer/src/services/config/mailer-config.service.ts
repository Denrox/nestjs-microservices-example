import { MailerOptionsFactory, MailerOptions } from '@nestjs-modules/mailer';

export class MailerConfigService implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions {
    return {
      transport: process.env.MAILER_DSN,
      defaults: {
        from: process.env.MAILER_FROM,
      },
    };
  }
}
