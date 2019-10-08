export class ConfigService {

  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.MAILER_SERVICE_PORT,
      emailsDisabled: process.env.MAILER_DISABLED
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
