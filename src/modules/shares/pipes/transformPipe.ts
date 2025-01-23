import { ValidationPipe } from '@nestjs/common';

export const transformPipe = new ValidationPipe({
  transform: true,
  validatorPackage: require('@nestjs/class-validator'),
  transformerPackage: require('@nestjs/class-transformer'),
});
