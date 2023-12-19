import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Room = db.define('room', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len : [3, 100]
        }
    },
    capacity:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    owner:{
        type : DataTypes.INTEGER
    }
 },{
    freezeTableName: true
 });

 Users.hasMany(Room);
 Room.belongsTo(Users, {foreignKey: 'owner'});

 export default Room;