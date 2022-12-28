import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "containers-us-west-127.railway.app",
    port: 5762,
    username: "postgres",
    password: "zACWIPIBmfES9F3AoO7V",
    database: "railway",
    synchronize: true,
    logging: true,
    entities: ["src/models/**/*.ts"],
    subscribers: [],
    migrations: [],
});
