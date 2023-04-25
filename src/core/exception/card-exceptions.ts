import { HttpException } from '@nestjs/common';
import { CreateCardDto } from 'src/dto/card.dto';


export class CardDoesntExistException extends HttpException {
  constructor(statusCode: number) {
    super("Card doesn't exist", statusCode)
  }
}

export class CardExistException extends HttpException {
  constructor(statusCode: number, card: CreateCardDto) {
    super(`Card ${card.ru} - ${card.en} exist`, statusCode)
  }
}