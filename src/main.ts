import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppExceptionFilter } from './exeptions/exeption.filter';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const URL = process.env.GRPC_URL || '0.0.0.0:5000';

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'product',
      url: URL,
      protoPath: [join(__dirname, './modules/product/protos/product.proto')],
      loader: {
        defaults: true,
      },
    },
  };

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceOptions,
  );

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('@nestjs/class-transformer'),
      validationError: {
        target: false,
      },
    }),
  );

  app.useGlobalFilters(new AppExceptionFilter());

  await app.listen();
  logger.debug(`Started GRPC server on ${microserviceOptions.options.url}`);
}
bootstrap();
