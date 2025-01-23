import { configDotenv } from 'dotenv';
import { DataSource } from 'typeorm';

configDotenv({
  path: '.env',
});

export default new DataSource({
  type: 'postgres',
  host: process.env['DB_HOST'],
  port: +process.env['DB_PORT'],
  username: process.env['DB_USER'],
  password: process.env['DB_PASS'],
  database: process.env['DB_NAME'],
  entities: ['src/modules/**/*.entity{.js,.ts}'],
  synchronize: true,
  migrations: ['src/database/migrations/*{.js,.ts}'],
});
