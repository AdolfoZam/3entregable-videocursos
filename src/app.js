const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');

const app = express();

const PORT = 8000;

db.authenticate()//metodo para autenticar y probar la db
    .then(()=>console.log('autenticacion exitosa'))
    .catch((error)=>console.log(error));

initModels();//iniciamos los models

db.sync(force=false)
    .then(()=>console.log('base de datos sincronizada'))
    .catch((error) => console.log(error))

app.get("/",(req,res)=>{
    res.status(200).json({message:"Bienvenidos al servidor"})
});

app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
});




