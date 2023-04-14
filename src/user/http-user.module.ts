import { UserService } from './user.service';
import { UserModule } from './user.module';
import { Module } from "@nestjs/common";
import { UserController } from './user.controller';

@Module({
  imports: [UserModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserHttpModule {}