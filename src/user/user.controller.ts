import { Body, Controller, Get, Post, Delete, Put, Param } from "@nestjs/common";
import { CreateUserDto } from "src/dto/create-user.dto";
import { User } from "src/entity/user";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService
  ) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Post('auth')
  async authorization(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.authorization(createUserDto)
  }

  @Put(':id/update')
  update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    this.userService.update(id, createUserDto)
  }

  @Delete(':id/delete')
  remove(@Param('id') id: number) {
    this.userService.remove(id)
  }
}