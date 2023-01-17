const { Router } = require('express');

const { getAllCourses, getCoursesWithCategories, createCourses, updateCourses } = require('../controllers/courses.controller');

const router = Router();

router.get('/courses', getAllCourses);//ruta de todos los cursos
//obtener los cursos con sus categorias y los videos del curso
router.get('/courses/:id/categories', getCoursesWithCategories);

router.post('/courses', createCourses);

router.put('/courses/:id', updateCourses);

module.exports = router;

