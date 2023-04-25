import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { CardModule } from "./card-module";

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

  @OneToMany(() => CardModule, (cardModule) => cardModule)
  modules: CardModule[]

}