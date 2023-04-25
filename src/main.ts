import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*

Возможность использовать переменные из .env файла.
- Создаём .env файл
- Наполняем его переменными API_PORT=3001
- Переменные доступны в process.env
- для получения числового значения парсим сторку в число parseInt(process.env.API_PORT)

*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = parseInt(process.env.API_PORT)
  await app.listen(port || 3000, () => {
    console.log(`Card app use port: ${port}`)
  });
}

bootstrap();
