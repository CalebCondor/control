import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './users/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User],
  migrations: ['src/migrations/*.ts'],
  ssl: {
    rejectUnauthorized: false,
  },
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;