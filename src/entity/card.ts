import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { User } from "./user";

@Entity() 
export class Card {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ru: string;

  @Column({ length: 100 })
  en: string;

  @ManyToMany(() => User, user => user.cards)
  @JoinTable()
  users: User[];
}