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

export class UserDoesntExistException extends HttpException {
  constructor(statusCode: number) {
    super(`User doesn't exist`, statusCode)
  }
}

export class WrongCredentialsException extends HttpException {
  constructor(statusCode: number) {
    super('Wrong credentials', statusCode)
  }
}