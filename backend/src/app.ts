import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme } from 'swagger-themes';

(async () => {
  // ประกาศ app จาก NestJS ที่เรียก module เริ่มแรกจาก AppModule
  const app = await NestFactory.create(AppModule, { cors: true });

  // ตั้งค่า default path, port ที่ออก และ อื่นๆ
  const projectName = 'MVC PROJECT';
  const globalPrefix = 'api/v1';
  const pathSwagger = 'docsapi';
  const port = process.env.PORT || 3000;

  // กำหนด default path และ ValidationPipe ให้กับ NestJs
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());

  // กำหนด และ ตั้งค่าต่างๆของ Swagger สำหรับใช้ทดสอบ Request ต่างๆ
  const config = new DocumentBuilder()
    .setTitle(projectName)
    .setDescription('this api document for cool boy 😎')
    .setVersion('0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme('v3');
  SwaggerModule.setup(pathSwagger, app, document, {
    customCss: theme.getBuffer('dark'),
  });

  await app.listen(port);
  Logger.log(
    ` 🎄 🎄 🎄 Swagger document on: http://localhost:${port}/${pathSwagger}`,
  );
  Logger.log(
    ` 🚀 🚀 🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
})();
