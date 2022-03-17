import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppConfigService } from "./app-config.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development", ".env.test", ".env.production"],
      isGlobal: true,
    }),
  ],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
