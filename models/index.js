const Students = require("./students");
const Department = require("./department");

//one to one


// one to many
Department.hasMany(Students)
Students.belongsTo(Department);

module.exports = {
    Department,
    Students
}