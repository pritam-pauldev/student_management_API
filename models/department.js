const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connection");

const Department = sequelize.define("Department", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    departmentName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Department;