import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Plant } from 'src/entities/plants.entity';
import { CreatePlantDTO } from './dto/create-plant';
import { PlantsService } from './plants.service';

@Controller('plants')
@ApiTags('Plants')
export class PlantsController {
  constructor(private readonly plantService: PlantsService) {}

  @Get(':userId')
  @ApiResponse({ type: '200' })
  @ApiParam({ type: 'string', name: 'userId' })
  async findByUserId(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Plant[]> {
    return this.plantService.findByUserId(userId);
  }

  @Post()
  @ApiCreatedResponse()
  @ApiResponse({ type: '400' })
  async create(@Body() body: CreatePlantDTO): Promise<Plant> {
    return this.plantService.create(body);
  }
}
