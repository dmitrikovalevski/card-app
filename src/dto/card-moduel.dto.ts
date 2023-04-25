import { User } from "src/entity/user"

export class CreateCardModuleDto {
  name: string;
  userId: number;
  user: User;
}

export class UpdateCardModuleDto {
  name: string
}