const Users = require('./users.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const UserCourses = require('./userCourses.models');

const initModels = () => {
   
    UserCourses.belongsTo(Users,{as:'author', foreignKey:'user_id'});
    Users.hasMany(UserCourses, {as:'LearnCourse', foreignKey:'user_id'});

    UserCourses.belongsTo(Users, {as: "LearnCourse", foreignKey: "user_id"});
    Users.hasMany(UserCourses, {as: "course", foreignKey: "user:id"});
    UserCourses.belongsTo(Courses, {as: "course", foreignKey: "courses_id"});
    Courses.hasMany(UserCourses, {as:"LearnCourse", foreignKey: "courses_id"});

    Categories.belongsTo(Courses, {as: "category", foreignKey: "courses_id"});
    Courses.hasMany(Categories, {as: "category", foreignKey: "courses_id"});

    Videos.belongsTo(Courses, {as: "course", foreignKey: "courses_id"});
    Courses.hasMany(Videos, {as: "course", foreignKey:"courses_id"});
};

module.exports = initModels;

