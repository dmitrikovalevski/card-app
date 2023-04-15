import { Injectable } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { User } from 'src/entity/user';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AssaignmentCardService {

  constructor(

    private userService: UserService,
    private cardService: CardService
  ) {}

  async attachCard(id: number): Promise<void> {
    const user: User = await this.userService.findOne(1)
    const currentCard = await this.cardService.findOne(id)
    user.cards = user.cards.filter(card => card.id !== currentCard.id);
    await this.userService.saveUser(user) 
  }
}