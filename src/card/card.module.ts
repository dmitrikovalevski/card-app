import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Card } from 'src/entity/card';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { User } from 'src/entity/user';
import { AssignmentCardModule } from 'src/services/assignment-card/assignment-card.module';


@Module({
  imports: [TypeOrmModule.forFeature([Card, User]), AssignmentCardModule],
  providers: [CardService],
  controllers: [CardController],
  exports: [TypeOrmModule, CardService]
})
export class CardModule {}