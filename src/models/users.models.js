const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Users = db.define("users", {
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true,//vamos a validar que el correo tiene el formato de correo
        },
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});

module.exports = Users;