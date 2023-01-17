const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.models");

class UserServices {
  static async getAll() {
    try {
      // aca nos comunicamos a la base de datos, por medio del modelo
      const result = await Users.findAll({
        attributes: { exclude: ["password"] },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  //servicio para obtener el usuario por ID
  static async getById(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  //servicio para obtener los cursos con el usuario
  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: { exclude: ["password"] },
        attributes: ["first_name", "last_name", "email"],
        include: {
          model: UserCourses,
          as: "LearnCourse",
          
          include: {
            model: Courses,
            as: "course",
            attributes: ["title","description"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  //servicio para crear un usuario en la base de datos
  static async create(User) {
    try {
      const result = await Users.create(User);
      return result;
    } catch (error) {
      throw error;
    }
  }
  //servicio para actualizar un usuario
  static async update(id, field) {
    try {
      const result = await Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
