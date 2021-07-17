import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(name?: string): Promise<User[]> {
    if (name) {
      return this.userRepository.find({ name: Like(`%${name}%`) });
    }
    return this.userRepository.find({ relations: ['plants'] });
  }

  async findById(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
      relations: ['plants'],
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async create({ name }: CreateUserDto) {
    const newUser = this.userRepository.create({ name });
    await this.userRepository.save(newUser);
    return newUser;
  }
}
