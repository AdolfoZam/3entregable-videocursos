const { Router } = require('express'); 
const { getAllCategories, createCategories, updateCategories, deleteCategories} = require('../controllers/categories.controller');

const router = Router();

router.get('/categories', getAllCategories);

router.post('/categories', createCategories);

router.put('/categories/:id', updateCategories);

router.delete('/categories/:id', deleteCategories);

module.exports = router;


