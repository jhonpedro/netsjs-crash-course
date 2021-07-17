import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({
    type: [User],
    description: 'Returns all users with their plants.',
  })
  @ApiQuery({ name: 'name', required: false, example: '?name=Mario' })
  async index(@Query('name') name: string): Promise<User[]> {
    return this.usersService.findAll(name);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: User,
    description: 'Return the user with the specific id provided.',
  })
  show(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findById(id);
  }

  @Post()
  @ApiResponse({
    type: User,
    description: 'Creates an user based in the given body.',
  })
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create(body);
  }
}
