const VideosServices = require('../services/videos.services');
//controlador que gestiona la peticion por medio del servicio
const getAllVideos = async ( req, res ) => {
    try {
        const result = await VideosServices.getAll();
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//controlador que gestiona la creacion de un video
const createVideos = async ( req, res ) => {
    try {
        const newVideo = req.body;
        const result = await VideosServices.create(newVideo);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//controlador que gestion la eliminacion de un video
const deleteVideos = async ( req, res ) => {
    try {
        const { id } = req.params;
        const result = await VideosServices.destroy(id);
        res.json(result)
    } catch (error) {
        res. status(400).json(error.message);
    }
}

module.exports = { getAllVideos, createVideos, deleteVideos }