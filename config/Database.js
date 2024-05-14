import { Sequelize } from "sequelize";

const db = new Sequelize('woy', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;