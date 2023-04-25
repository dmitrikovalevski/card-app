import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { CardService } from "./card.service";
import { Card } from "src/entity/card";
import { CreateCardDto } from "src/dto/card.dto";
// импорт нужен для получения респонс параметров
import { Response } from 'express';

@Controller('card')
export class CardController {

  constructor(
    private cardService: CardService
  ) {}

  @Get()
  async findAll(): Promise<Card[]> {
    return await this.cardService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cardService.findOne(id)
  }

  @Post()
  async create(@Body() card: CreateCardDto): Promise<Card> {
    return await this.cardService.create(card)
  }

  @Put(':id/update')
  update(@Param('id') id: number, @Body() card: CreateCardDto) {
    this.cardService.update(id, card)
  }

  @Delete(':id/delete')
  delete(@Param('id') id: number) {
    this.cardService.delete(id)
  }
}

