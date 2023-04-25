import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCardModuleDto } from "src/dto/card-moduel.dto";
import { CardModule } from "src/entity/card-module";
import { Repository } from "typeorm";
import { CardModuleDoesntExistException, CardModuleExistException } from "src/core/exception/card-module-exception";
import { User } from "src/entity/user";


@Injectable()
export class CardModuleService {
  constructor(
    @InjectRepository(CardModule)
    private cardModuleRepository: Repository<CardModule>,
  ) {}

  async findAll(): Promise<CardModule[]> {
    return this.cardModuleRepository.find()
  }

  async findOne(id: number): Promise<CardModule | null> {
    const user = await this.cardModuleRepository.findOneBy({ id })
    if (user) {
      return await this.cardModuleRepository.findOneBy({ id })
    } else {
      throw new CardModuleDoesntExistException(500)
    }
  }
  
  async create(cardModule: CreateCardModuleDto, user: User): Promise<CardModule> {
    const cardModuleNameExist = await this.cardModuleRepository.findOneBy({ name: cardModule.name });
    if (cardModuleNameExist) {
      throw new CardModuleExistException(cardModule, 500)
    } else {
      cardModule.user = user
      const entityCardModule = this.cardModuleRepository.create(cardModule)
      return await this.cardModuleRepository.save(entityCardModule);
    }
  }
  
  async update(id: number, createCardModuleDto: CreateCardModuleDto): Promise<void> {
    await this.cardModuleRepository.update(id, createCardModuleDto)
  }

  async remove(id: number): Promise<void> {
    await this.cardModuleRepository.delete(id)
  }

  async saveCardModule(cardModule: CardModule): Promise<void> {
    await this.cardModuleRepository.save(cardModule);
  }
}