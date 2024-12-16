import { Module } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { LevelsController } from './levels.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [LevelsController],
  providers: [LevelsService],
  imports: [PrismaModule]
})
export class LevelsModule {}
