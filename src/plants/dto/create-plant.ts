import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, MinLength } from 'class-validator';

export class CreatePlantDTO {
  @IsNumber()
  @ApiProperty()
  userId: number;

  @IsOptional()
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty()
  @MinLength(3)
  specieName: string;
}
