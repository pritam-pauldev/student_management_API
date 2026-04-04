const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connection");

const StudentCourses = sequelize.define("StudentCourses", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
});

module.exports = StudentCourses;