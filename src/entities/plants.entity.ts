import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'plants' })
export class Plant {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ name: 'user_id' })
  userId: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ name: 'specie_name' })
  specieName: string;

  @ApiProperty({ example: 'An user' })
  @ManyToOne(() => User, (user) => user.plants)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
