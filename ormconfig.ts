require('dotenv').config();
import path from 'path'

export = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    path.resolve(__dirname, 'src', 'models', '*.ts')
  ],
  migrations: [
    path.resolve(__dirname, 'src', 'database', 'migrations', '*.ts')
  ],
  cli: {
    migrationsDir: path.resolve(__dirname, 'src', 'models', '*.ts')
  }
}
