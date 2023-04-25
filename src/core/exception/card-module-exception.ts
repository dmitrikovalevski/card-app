import { HttpException } from '@nestjs/common';
import { CreateCardModuleDto } from 'src/dto/card-moduel.dto'; 

export class CardModuleDoesntExistException extends HttpException {
  constructor(statusCode: number) {
    super("Module doesn't exist", statusCode)
  }
}

export class CardModuleExistException extends HttpException {
  constructor(cardModuleName: CreateCardModuleDto, statusCode: number) {
    super(`Module ${cardModuleName.name} exist`, statusCode)
  }
}