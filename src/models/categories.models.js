const db = require('../utils/database');//importo la base de datos
const { DataTypes } = require('sequelize');

const Categories = db.define("categories", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    courses_id: {
        type: DataTypes.INTEGER,
    },
},{
    timestamps: false,
});

module.exports = Categories;
