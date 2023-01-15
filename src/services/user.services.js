const Users = require('../models/users.models');

class UserServices {
    static async getAll() {
        try { // aca nos comunicamos a la base de datos, por medio del modelo
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById (id) {
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create (User) {
        try {
            const result = await Users.create(User);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async update (id, field) {
        try {
            const result = await Users.update(field, { where: { id }})
            return result;
        } catch (error) {
            throw error;
        }
    }


}

module.exports = UserServices;

