import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("api");
  app.useStaticAssets(join(__dirname, "..", "static/images"), { prefix: "/api/pics" });

  const config = new DocumentBuilder()
    .setTitle("Learning NestJS")
    .setDescription("The Learning NestJS API description")
    .setVersion("1.0")
    .addTag("NestJS")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/swagger", app, document);

  app.enableCors();
  
  const port = process.env.PORT || 8000;
  await app.listen(port);
  console.log(`NestJS server listening on port ${port}`)
}
bootstrap();
