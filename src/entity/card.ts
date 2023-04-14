import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity() 
export class Card {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ru: string;

  @Column({ length: 100 })
  en: string;

  @ManyToOne(type => User, user => user.cards)
  user: User;
}