import { HttpException } from "@nestjs/common";

export class UserExistException extends HttpException {
  constructor (user: string, statusCode: number) {
    super(`User ${user} already exist.`, statusCode)
  }
}

export class EmailExistException extends HttpException {
  constructor (email: string, statusCode: number) {
    super(`${email} already exist.`, statusCode)
  }
} 

export class UserDoesntExistExcwption extends HttpException {
  constructor(statusCode: number) {
    super(`User doesn't exist`, statusCode)
  }
}