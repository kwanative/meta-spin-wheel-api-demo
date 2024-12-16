import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from "./modules/users/users.module";
import { LevelsModule } from "./modules/levels/levels.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    UsersModule,
    LevelsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
