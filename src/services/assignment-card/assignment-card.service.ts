import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CardService } from 'src/card/card.service';
import { User } from 'src/entity/user';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AssaignmentCardService {

  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    @Inject(forwardRef(() => CardService))
    protected cardService: CardService
  ) {}

  async attachCard(): Promise<void> {
    const user: User = await this.userService.findOne(1)
    const currentCard = await this.cardService.findOne(4)
    console.log(currentCard)
    // user.cards = user.cards.filter(card => card.id !== currentCard.id);
    user.cards.push(currentCard)
    console.log(user)
    await this.userService.saveUser(user)
  }
}