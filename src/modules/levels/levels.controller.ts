import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { LevelsService } from "./levels.service";
import { CreateLevelDto } from "./dto/create-level.dto";
import { UpdateLevelDto } from "./dto/update-level.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Game Levels")
@Controller("levels")
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Get()
  findAll() {
    return this.levelsService.findAll();
  }
}
