const { Router } = require('express');

const { getAllCourses, createCourses, updateCourses } = require('../controllers/courses.controller');

const router = Router();

router.get('/courses', getAllCourses);//ruta de todos los cursos

router.post('/courses', createCourses);

router.put('/courses/:id', updateCourses);

module.exports = router;

