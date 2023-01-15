const Categories = require('../models/categories.models');

class CategoriesServices {
//funcion para comunicarme conel modelo y posterior a la db para consultar
    static async getAll() {
        try {
            const result = await Categories.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
//funcion para crear una categoria por medio del modelo que se comunica a la db
    static async create(category) {
        try {
            const result = await Categories.create(category);
            return result;
        } catch (error) {
            throw error;
        }
    }
//funcion para actualizar una categoria por medio del modelo que se comunica con la db
    static async update(id, field) {
        try {
            const result = await Categories.update(field, { where: { id }});
            return result;
        } catch (error) {
            throw error;
        }
    }
//funcion para eliminar una categoria por medio del modelo que se comunica con la db
    static async delete(id) {
        try {
            const result = await Categories.destroy({ where: { id }});
            return result;
        }catch (error) {
            throw error;
        }
    }
}

module.exports = CategoriesServices;

