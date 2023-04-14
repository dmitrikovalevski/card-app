import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from './../entity/user';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { UserDoesntExistExcwption, UserExistException } from 'src/core/exception/user-exceptions';


@Injectable()
export class UserService {

  private readonly users: User[] = [];

  constructor (
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id })
    if (user) {
      return await this.usersRepository.findOneBy({ id })
    } else {
      throw new UserDoesntExistExcwption(500)
    }
  }
  
  async create(user: CreateUserDto): Promise<User> {
    const userNameExist = await this.usersRepository.findOneBy({ name: user.name });
    const userEmailExist = await this.usersRepository.findOneBy({ email: user.email })
    if (userNameExist || userEmailExist) {
      if (userNameExist) {
        throw new UserExistException(user.name, 500)
      }
      if (userEmailExist) {
        throw new UserExistException(user.email, 500)
      } 
    } else {
      const entity = this.usersRepository.create(user)
      return await this.usersRepository.save(entity);
    }
  }
  
  async update(id: number, createUserDto: CreateUserDto): Promise<void> {
    await this.usersRepository.update(id, createUserDto)
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }

  
}