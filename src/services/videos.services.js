const Videos = require('../models/videos.models');

class VideosServices {
//clase que contiene funciones que ingresaran al modelo para comunicarse conla DB
    static async getAll() {
        try {
            const result = await Videos.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
//por medio de la funcion creo el video, va al modelo y lo crea en la DB
    static async create(video) {
        try {
            const result = await Videos.create(video);
            return result;
        } catch (error) {
            throw error;
        }
    }
//funcion para eliminar video de la DB por medio del modelo
    static async delete(id) {
        try {
            const result = await Videos.destroy({ where: { id }}); 
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VideosServices;