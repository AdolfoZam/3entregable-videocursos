const {Sequelize} = require('sequelize');

const db = new Sequelize({
    database: "webcourses",
    username:"postgres",
    host:"localhost", //127.0.0.1
    port:"5432",
    password:"ruta",
    dialect:"postgres",//es el gestor de la DB
    logging:false
});
module.exports = db;
