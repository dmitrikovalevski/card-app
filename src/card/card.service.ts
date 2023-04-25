import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Card } from '../entity/card';
import { Repository } from 'typeorm';
import { CreateCardDto } from 'src/dto/card.dto';
import { CardDoesntExistException, CardExistException } from 'src/core/exception/card-exceptions';


@Injectable()
export class CardService {

  private readonly cards: Card[] = [];

  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find()
  }

  async findOne(id: number): Promise<Card | null> {
    const card = await this.cardRepository.findOneBy({ id })
    if (card) {
      return await this.cardRepository.findOneBy({ id })
    } else {
      throw new CardDoesntExistException(500)
    }
  }

  async create(card: CreateCardDto): Promise<Card> {
    const isCardExist = await this.cardRepository.findOneBy({ ru: card.ru, en: card.en })
    if (isCardExist) {
      throw new CardExistException(200, card)
    } else {
      const entity = this.cardRepository.create(card)
      return await this.cardRepository.save(entity)
    }
  }

  async update(id: number, card: CreateCardDto): Promise<void> {
    await this.cardRepository.update(id, card)
  }

  async delete(id: number): Promise<void> {
    await this.cardRepository.delete(id)
  }

  async getCardsWithuser(): Promise<Card[]> {
    const queryBuilder = this.cardRepository
      .createQueryBuilder('card')
      .innerJoinAndSelect('card.users', 'user');
    const cards = await queryBuilder.getMany();
    return cards;
  }

}