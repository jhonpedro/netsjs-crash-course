import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [
    UsersModule,
    PlantsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
