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

  // @OneToMany(type => Card, card => card.user, { cascade: true })
  // cards: Card[];

  @ManyToMany(() => Card, card => card.users)
  cards: Card[];

}