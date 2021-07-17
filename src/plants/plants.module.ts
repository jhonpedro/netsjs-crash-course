import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from 'src/entities/plants.entity';
import { PlantsController } from './plants.controller';
import { PlantsService } from './plants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Plant])],
  controllers: [PlantsController],
  providers: [PlantsService],
})
export class PlantsModule {}
