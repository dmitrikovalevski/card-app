import { Delete } from '@nestjs/common';
import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { CardModuleService } from './card-module.service';
import { CardModule } from 'src/entity/card-module';
import { CreateCardModuleDto, UpdateCardModuleDto } from 'src/dto/card-moduel.dto';
import { UserService } from 'src/user/user.service';
import { User } from 'src/entity/user';

@Controller('card-module')
export class CardModuleController {
  constructor(
    private cardModuleService: CardModuleService,
    private userService: UserService,
  ){}

  @Get()
  async getAllCardModules(): Promise<CardModule[]> {
    return await this.cardModuleService.findAll()
  }

  @Get(':id')
  async getCardModuleById(@Param('id') id: number): Promise<CardModule> {
    return await this.cardModuleService.findOne(id)
  }

  @Post()
  async create(@Body() createCardModuleDto: CreateCardModuleDto): Promise<CardModule> {
    const user: User = await this.userService.findOne(createCardModuleDto.userId)
    return await this.cardModuleService.create(createCardModuleDto, user)
  }

  @Put(':id/update')
  async update(@Param() id: number, @Body() updateCardModuleDto: UpdateCardModuleDto): Promise<void> {
    await this.cardModuleService.update(id, updateCardModuleDto)
  }

  @Delete(':id/delete')
  async delete(@Param() id: number): Promise<void> {
    await this.cardModuleService.delete(id)
  }

}