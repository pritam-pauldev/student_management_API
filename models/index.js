const Students = require("./students");
const Department = require("./department");
const Courses = require("./courses");
const StudentCourses = require("./studentCourses");

//one to one


// one to many
Department.hasMany(Students)
Students.belongsTo(Department);

// many to many
Students.belongsToMany(Courses, { through: StudentCourses })
Courses.belongsToMany(Students, { through: StudentCourses });

module.exports = {
    Department,
    Students,
    Courses,
    StudentCourses
}