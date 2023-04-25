import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user';
import { Repository } from 'typeorm';

@Injectable()
export class QuaryBuilderService {

  constructor() {}

  async getAllUserCards(userRepository: Repository<User>): Promise<User[]> {
    const queryBuilder = userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.cards', 'cards')
      .where('user.id = :userID', { userID: 2 })
    const userWithCards = await queryBuilder.getMany();
    return userWithCards
  }

  async addCardToUser(userRepository: Repository<User>): Promise<void> {
    await userRepository
      .createQueryBuilder('card_users_user')
      .insert()
      .into('card_users_user')
      .values([
        { cardId: 10, userId: 2 }
      ])
      .execute()
  }
}