import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Card } from 'src/entity/card';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { User } from 'src/entity/user';
import { AssaignmentCardService } from 'src/services/assignment-card/assignment-card.service';
import { UserService } from 'src/user/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([Card, User])],
  /*
  * Возникала ошибка при добавлении в список провайдеров AssaignmentCardService.
  * Ошибка возникала из-за того, что в в серивсе AssaignmentCardService использовались 
  * CardService и UserService, а в список провайдеров не был добавлен UserService.
  * После добавления этого сервиса бэк поднялся. 
  */
  providers: [CardService, UserService, AssaignmentCardService],
  controllers: [CardController],
  exports: [TypeOrmModule]
})
export class CardModule {}