import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {
  INestApplication,
  Logger,
  ValidationPipe,
  VersioningType,
} from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

const port = process.env.PORT || 3030;

function setupSwagger(app: INestApplication) {
  const logger = new Logger();
  logger.log(`Application setupSwagger`);
  const config = new DocumentBuilder()
    .setTitle('Meta Spin Wheel API')
    .setDescription('APIs for Meta Spin Wheel Game')
    .setVersion('1.0.0')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
}

async function bootstrap() {
  const logger = new Logger();
  // Use logger for server logging
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ["error", "warn", "debug", "log", "verbose"],
    rawBody: true,
  });

  app.enableCors({
    allowedHeaders: "*",
    origin: "*",
    credentials: true,
  });

  // app.useGlobalFilters(new AllExceptionsFilter());

  // Global Validation Pipe !
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );
  app.setGlobalPrefix("api");
  app.enableVersioning({
    type: VersioningType.URI,
  });
  logger.log(`Application NODE_ENV: ${process.env.NODE_ENV}`);
  if (process.env.NODE_ENV === "development") {
    setupSwagger(app);
  }

  try {
    await app.listen(port);
    logger.log(`Application running on port ${port}`);
  } catch (error) {
    console.error(error);
  }
}

bootstrap();
