import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly config: ConfigService) {}

  public get isDevelopment(): boolean {
    return this.config.get('NODE_ENV') === 'development';
  }

  public get isTest(): boolean {
    return this.config.get('NODE_ENV') === 'test';
  }

  public get isProduction(): boolean {
    return this.config.get('NODE_ENV') === 'production';
  }
}
