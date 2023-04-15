import { Module, forwardRef } from '@nestjs/common';
import { AssaignmentCardService } from './assignment-card.service';
import { CardModule } from 'src/card/card.module';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
    forwardRef(() => CardModule), 
    forwardRef(() => UserModule)
  ],
  providers: [AssaignmentCardService],
  exports: [AssaignmentCardService],
})
export class AssignmentCardModule { }
