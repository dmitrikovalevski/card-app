import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Card } from 'src/entity/card';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { User } from 'src/entity/user';
import { UserService } from 'src/user/user.service';


@Module({
  imports: [TypeOrmModule.forFeature([Card, User])],
  providers: [CardService, UserService],
  controllers: [CardController],
  exports: [TypeOrmModule]
})
export class CardModule {}