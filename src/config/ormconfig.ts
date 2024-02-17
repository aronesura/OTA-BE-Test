import { DataSource } from 'typeorm';

const connectDB = async () => {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    synchronize: true,
    entities: ['./src/entities/**/*.ts'],
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });

  await dataSource.initialize();
};

export default connectDB;
