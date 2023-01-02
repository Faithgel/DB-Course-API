import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*.ts"],
    subscribers: [],
    migrations: [],
});
