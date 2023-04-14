import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Card } from '../entity/card';
import { Repository } from 'typeorm';
import { CreateCardDto } from 'src/dto/create-card.dto';
import { UserService } from 'src/user/user.service';
import { CardDoesntExistException } from 'src/core/exception/card-exceptions';
import { User } from 'src/entity/user';


@Injectable()
export class CardService {

  private readonly cards: Card[] = [];

  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
    private userService: UserService
  ) {}

  findAll(): Promise<Card[]> {
    return this.cardRepository.find()
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
    // если карточка существет, передадим её другому пользователю
    // const user: User = await this.userService.findOne(4)
    // card.user = user
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
}