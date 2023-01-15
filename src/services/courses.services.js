const Courses = require('../models/courses.models');//importo la ruta para acceder a los modelos y posterior a la DB

class CourseServices {
//funcion que accede al modelo y luego este a la base de datos para traer un registro
    static async getAll() {
        try {
            const result = await Courses.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
//funcion que accede al modelo y luego este a la base de datos para crear un registro
    static async create(course) {
        try {
            const result = await Courses.create(course);
            return result;
        } catch (error) {
            throw error;
        }
    }
//funcion que accede al modelo y luego este a la base de datos para actualizar un registro
    static async update(id, field) {
        try {
            const result = await Courses.update(field, { where: { id }})
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CourseServices;