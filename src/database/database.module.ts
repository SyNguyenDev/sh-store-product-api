import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database.config';

const databaseProvider = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: TypeOrmConfigService,
  }),
];

@Module({
  imports: [ConfigModule.forRoot(), ...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}
