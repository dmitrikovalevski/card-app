import { CreateUserDto, IsUserActive } from 'src/dto/create-user.dto';
import { User } from './../entity/user';
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { UserDoesntExistException, UserExistException, WrongCredentialsException } from 'src/core/exception/user-exceptions';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


@Injectable()
export class UserService {

  private readonly users: User[] = [];

  constructor (
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id })
    if (user) {
      return await this.userRepository.findOneBy({ id })
    } else {
      throw new UserDoesntExistException(500)
    }
  }
  
  async create(user: CreateUserDto): Promise<User> {
    const userNameExist = await this.userRepository.findOneBy({ name: user.name });
    const userEmailExist = await this.userRepository.findOneBy({ email: user.email })
    if (userNameExist || userEmailExist) {
      if (userNameExist) {
        throw new UserExistException(user.name, 500)
      }
      if (userEmailExist) {
        throw new UserExistException(user.email, 500)
      } 
    } else {
      const entity = this.userRepository.create(user)
      return await this.userRepository.save(entity);
    }
  }
  
  async update(id: number, createUserDto: CreateUserDto): Promise<void> {
    await this.userRepository.update(id, createUserDto)
  }

  async setUserActiveMode(id: number, isUserActive: IsUserActive): Promise<void> {
    await this.userRepository.update(id, isUserActive)
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }

  async saveUser(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async authorization(createUserDto: CreateUserDto): Promise<User> {
    const userNameExist = await this.userRepository.findOneBy({ name: createUserDto.name });
    const userEmailExist = await this.userRepository.findOneBy({ email: createUserDto.email })
    if (userNameExist && userEmailExist) {
      const user = await this.findOne(userNameExist.id)
      this.setUserActiveMode(user.id, { isActive: true })
      return user
    } else {
      throw new WrongCredentialsException(500)
    }
  } 

}