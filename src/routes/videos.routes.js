const { Router } = require('express');
const { getAllVideos, createVideos, deleteVideos } = require('../controllers/videos.controller');

const router = Router();

router.get('/videos', getAllVideos);

router.post('/videos', createVideos);

router.delete('/videos/:id', deleteVideos);

module.exports = router;


