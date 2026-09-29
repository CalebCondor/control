import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  const databaseUrl = configService.get<string>('DATABASE_URL');

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not defined');
  }

  return {
    type: 'postgres',
    url: databaseUrl,
    autoLoadEntities: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/migrations/*.js'],
    ssl: {
      rejectUnauthorized: false,
    },
  };
};
