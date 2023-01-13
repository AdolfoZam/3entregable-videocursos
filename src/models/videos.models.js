const db = require('../utils/database');//importo la base de adtos
const {DataTypes} = require('sequelize');

const Videos = db.define("videos", {
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
    url:{
        type:DataTypes.STRING,
    },
    course_id:{
        type:DataTypes.INTEGER,
    },
});

module.exports = Videos;

