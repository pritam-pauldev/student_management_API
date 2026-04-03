const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('studentManager', 'root', 'PRIyaNPRIya', {
    host: 'localhost',
    dialect: "mysql"
});

(async () => {
    try {
        sequelize.authenticate();
        console.log("Database is connected using Sequelize");
    } catch(err) {
        console.log(err);
    }
})();

module.exports = sequelize;



// const mySql = require("mysql2");
// const connection = mySql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "PRIyaNPRIya",
//   database: "studentmanager",
// });
// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Database connected");
//   }
//   const createQuery = `CREATE TABLE IF NOT EXISTS Students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(20),
//         email VARCHAR(255) UNIQUE,
//         age INT
//     );`;
//   connection.execute(createQuery, (err, result) => {
//     if (err) {
//       console.log(err);
//       connection.end;
//       return;
//     } else {
//       console.log("Student database created");
//     }
//   });
// });

// module.exports = connection;
