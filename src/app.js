const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/users.routes');//importo la ruta de usuarios
const courseRoutes = require('./routes/courses.routes');//importo la ruta de cursos
const categoriesRoutes = require('./routes/categories.routes');

const app = express();

const PORT = 8000;

app.use(express.json());//middleware de express, porque viene la informacion en un json, y lo pasa como objeto

db.authenticate()//metodo para autenticar y probar la db
    .then(() => console.log('autenticacion exitosa'))
    .catch((error) => console.log(error));

initModels();//iniciamos los models

db.sync({ force:false })
    .then(() => console.log('base de datos sincronizada'))
    .catch((error) => console.log(error))

app.get("/", ( req, res ) => {
    res.status(200).json({message:"Bienvenidos al servidor"})
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);
app.use('/api/v1', categoriesRoutes);

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});




