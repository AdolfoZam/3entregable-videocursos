const CourseServices = require('../services/courses.services');

const getAllCourses = async ( req, res ) => {
    try {
        const result = await CourseServices.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//controlador para obtener los cursos con sus categorias
const getCoursesWithCategories = async ( req, res ) => {
    try {
        const { id } = req.params;
        const result = await CourseServices.getWithCategories(id);
        res.json({
            message:"enviando cursos con categorias ",
            data:result,
        });
    } catch (error){
        res.status(400).json({
            error: error.messages,
            details: error.stacks,
        });
    }
}

const createCourses = async ( req, res ) => {
    try {
        const newCourse = req.body;
        const result = await CourseServices.create(newCourse);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateCourses = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await CourseServices.update(id, field);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { getAllCourses, getCoursesWithCategories, createCourses, updateCourses }