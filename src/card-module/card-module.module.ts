import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CardModule } from "src/entity/card-module";
import { CardModuleService } from "./card-module.service";
import { UserModule } from "src/user/user.module";
import { CardModuleController } from "./card-module.controller";


@Module({
  imports: [TypeOrmModule.forFeature([CardModule]), UserModule],
  controllers: [CardModuleController],
  providers: [CardModuleService],
  exports: [TypeOrmModule]
})
export class CardModuleModule {}