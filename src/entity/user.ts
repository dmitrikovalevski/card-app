import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany  } from "typeorm";
import { Card } from "./card";

@Entity() 
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ default: false })
  isActive: boolean;

  @ManyToMany(() => Card, card => card.users, { cascade: true })
  cards: Card[];

}