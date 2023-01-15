const UserServices = require('../services/user.services');
//obtengo todos los usuarios
const getAllUsers = async ( req, res ) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//obtengo el usuario por Id
const getUserById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//creo un usuario
const createUser = async ( req, res ) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//actualizo un usuario
const updateUser = async ( req, res ) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = UserServices.update(id, field);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
//limino un usuario
const deleteUser = ( req, res ) => {
    res.json({message: 'eliminando los usuarios'});
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}