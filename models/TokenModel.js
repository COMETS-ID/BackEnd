import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Token = db.define('token',{
    token:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Token;