import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Plant } from './plants.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ example: ['An array full of plants'] })
  @OneToMany(() => Plant, (plant) => plant.user)
  @JoinColumn({ name: 'user_id' })
  plants: Plant[];
}
