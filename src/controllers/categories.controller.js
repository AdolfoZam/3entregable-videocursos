const { json } = require('sequelize');
const CategoriesServices = require('../services/categories.services');

//controlador que consulta los servicios para ejecutar el metodo que consulta la categoria
const getAllCategories = async ( req, res ) => {
    try {
        const result = await CategoriesServices.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//controlador que consulta los servicios para ejecutar el metodo que crea la categoria
const createCategories = async ( req, res ) => {
    try {
        const newCategory = req.body;
        const result = await CategoriesServices.create(newCategory);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//controlador para actualizar
const updateCategories = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await CategoriesServices.update(id, field);
        res.json(result);
    } catch (error) {
        res.status(400),json(error.message);
    }
}
//controlador para eliminar
const deleteCategories = async ( req, res ) => {
    try {
        const { id } = req.params;
        const result = await CategoriesServices.destroy(id);
        res.json(result);
    } catch (error) {
        res.status(400),json(error.message);
    }
}

module.exports = { getAllCategories, createCategories, updateCategories, deleteCategories}
