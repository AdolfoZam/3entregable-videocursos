const db = require("../utils/database");
const Users = require("../models/users.models");
const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");
const UserCourses = require("../models/userCourses.models");

const users = [
  {
    first_name: "Andres",
    last_name: "martinez",
    email: "andres@gmail.com",
    password: "1234",
  },
  {
    first_name: "carlos",
    last_name: "perez",
    email: "carlos@gmail.com",
    password: "1234",
  },
  {
    first_name: "ana",
    last_name: "lopez",
    email: "ana@gmail.com",
    password: "1234",
  },
];

const courses = [
  { title: "ingles", description: "nivel 1", instructor: "maria", user_id:1}, //curso 1
  { title: "cocina", description: "saludable", instructor: "alejandro", user_id:2 }, //curso 2
  { title: "programacion", description: "fundamentos", instructor: "andres", user_id:3}, //curso 3
  { title: "historia", description: "mediaval", instructor: "diana", user_id:3 }, //curso 4
];

const categories = [
  { name: "idiomas", courses_id: 1 },
  { name: "hogar", courses_id: 2 },
  { name: "tecnologia", courses_id: 3 },
  { name: "cultura general", courses_id: 4 },
];

const videos = [
  { title: "basico", url: "http://1", courses_id: 1 },
  { title: "intermedio", url: "http://2", courses_id: 1 },
  { title: "avanzado", url: "http://3", courses_id: 1 },
  { title: "Comida paisa", url: "http://1", courses_id: 2 },
  { title: "comida valluna", url: "http://2", courses_id: 2 },
  { title: "javascript", url: "http://1", courses_id: 3 },
  { title: "c++", url: "http://2", courses_id: 3 },
  { title: "python", url: "http://3", courses_id: 3 },
  { title: "renacimiento", url: "http://1", courses_id: 4 },
  { title: "era industrial", url: "http://2", courses_id: 4 },
];

const userCourses = [
  { user_id: 1, courses_id: 2 },
  { user_id: 2, courses_id: 4 },
  { user_id: 3, courses_id: 1 },
  { user_id: 1, courses_id: 2 },
];

db.sync({ force: false })
  .then(() => {
    console.log("iniciando el sembrado");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 150);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 300);

    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 450);

    setTimeout(() => {
      userCourses.forEach((usercourse) => UserCourses.create(usercourse));
    }, 650);
  })
  .catch((error) => console.log(error));
