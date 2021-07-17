import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plant } from 'src/entities/plants.entity';
import { Repository } from 'typeorm';
import { CreatePlantDTO } from './dto/create-plant';

@Injectable()
export class PlantsService {
  constructor(
    @InjectRepository(Plant)
    private readonly plantRepository: Repository<Plant>,
  ) {}

  async findByUserId(userId: number): Promise<Plant[]> {
    return this.plantRepository.find({ where: { userId } });
  }

  async create({ userId, specieName, name }: CreatePlantDTO): Promise<Plant> {
    const newPlant = this.plantRepository.create({ userId, specieName, name });
    await this.plantRepository.save(newPlant);

    return newPlant;
  }
}
