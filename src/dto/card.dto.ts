import { User } from "src/entity/user";

export class CreateCardDto {
  ru: string;
  en: string;
  user: User;
}

export class AttachCardDto {
  id: number
}