const controller = require("../controllers/coursesController");
const express = require("express");
const routes = express.Router();

routes.use("/addCourses", controller.addCourses);
routes.use("/addStudentCourses", controller.addStudentsToCourses);

module.exports = routes;
