import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Card } from "./card";
import { User } from "./user";

@Entity()
export class CardModule {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => Card, (card) => card.module)
  cards: Card[]

  @ManyToOne(() => User, (user) => user.modules)
  user: User

}