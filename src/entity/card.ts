import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { CardModule } from "./card-module";


@Entity() 
export class Card {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ru: string;

  @Column({ length: 100 })
  en: string;

  @ManyToOne(() => CardModule, (cardModule) => cardModule.cards)
  module: CardModule

}