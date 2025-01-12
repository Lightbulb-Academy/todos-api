import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // create application instance in memory
  const app = await NestFactory.create(AppModule);

  // register middlewares here
  app.useGlobalPipes(new ValidationPipe());

  // application is running on given port, 3000
  await app.listen(3000);
}
bootstrap();
