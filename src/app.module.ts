import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHttpModule } from './user/http-user.module'; 
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';
import { CardModuleModule } from './card-module/card-module.module';

@Module({
  imports: [
    /*

    Свойство isGlobal: true поволяет использовать переменные из разных 
    файлов. Сам не пробовал но документация это утверждает.

    */
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    /*

    Подключаем postgresql
    npm install typeorm --save
    npm install reflect-metadata --save
    npm install @types/node --save-dev

    tsconfig.json
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,

    Для того что бы не добавлять сущности для баы данных в список Entities: [],
    в TypeOrmModule.forRoot добавим свойство autoLoadEntities: true. Это позволит 
    автоматически добавлять сущности из модулей в базу. При этом в модулях, где
    работаем с сущностями добвляем их в содуль следующим способом: imports: [TypeOrmModule.forFeature([Card])]

    */

    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "easylight1988",
      database: "card-app",
      synchronize: true,
      logging: false,
      autoLoadEntities: true,
      entities: [],
      subscribers: [],
      migrations: [],
    }),

    /*

    В UserHttpModule импортирован UserModule, который в свою очередь содержит 
    imports: [TypeOrmModule.forFeature([Card])]
    exports: [TypeOrmModule]
    Экспорт TypeOrmModule позволяет добаялть сущность в базу данных.

    */
    UserHttpModule,
    CardModule,
    CardModuleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
