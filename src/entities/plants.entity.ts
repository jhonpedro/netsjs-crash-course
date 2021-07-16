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
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column()
  name: string;

  @Column({ name: 'specie_name' })
  specieName: string;

  @ManyToOne(() => User, (user) => user.plants)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
