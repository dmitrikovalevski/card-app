import { HttpException } from '@nestjs/common';


export class CardDoesntExistException extends HttpException {
  constructor(statusCode: number) {
    super("Card doesn't exist", statusCode)
  }
}