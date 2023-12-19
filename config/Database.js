import { Sequelize } from "sequelize";

const db = new Sequelize('user','roy','123456',{
    host: "34.128.108.6",
    dialect: "mysql"
});

// const db = new Sequelize('jwt', 'root', '',{
//     host: "localhost",
//     dialect: "mysql"
// });

export default db;