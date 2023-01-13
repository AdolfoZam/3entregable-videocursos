const db = require('../utils/database');//importo la base de datos
const {DataTypes} = require('sequelize');//importo los tipos de datos

const Courses = db.define("courses", {
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    instructor:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});
module.exports = Courses;
