import { Injectable } from "@nestjs/common";
import { CreateLevelDto } from "./dto/create-level.dto";
import { UpdateLevelDto } from "./dto/update-level.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.m_level_point.findMany();
  }
}
