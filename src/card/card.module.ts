import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Card } from 'src/entity/card';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { User } from 'src/entity/user';


@Module({
  imports: [TypeOrmModule.forFeature([Card, User])],
  providers: [CardService],
  controllers: [CardController],
  exports: [TypeOrmModule]
})
export class CardModule {}