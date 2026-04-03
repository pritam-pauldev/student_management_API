const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('studentManager', 'root', 'PRIyaNPRIya', {
    host: 'localhost',
    dialect: "mysql"
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database is connected using Sequelize");
    } catch(err) {
        console.log(err);
    }
})();

module.exports = sequelize;
