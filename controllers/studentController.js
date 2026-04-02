const connection = require("../utils/db_connection");

const addNewStudent = (req, res) => {
  const { name, email, age } = req.body;
  const insertQuery = `
    INSERT INTO Students(name, email, age)
    VALUES(?,?,?);
    `;
  connection.execute(insertQuery, [name, email, age], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    } else {
      console.log("New studdent added");
      res
        .status(201)
        .send(
          `name:${name}, email:${email}, age${age} inserted into the database`,
        );
    }
  });
};

const getAllStudent = (req, res) => {
  const getAllQuery = `
    SELECT * FROM Students;
    `;
  connection.execute(getAllQuery, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    } else {
      console.log("Get All Student");
      res.status(200).send({
        message: "All Students data fetched",
        data: result,
      });
    }
  });
};

const getStudentByID = (req, res) => {
  const id = req.params.id;
  const getIdQuery = `
    SELECT * FROM Students
    WHERE id = ?;
    `;
  connection.execute(getIdQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    } else if (result.affectedRows === 0) {
      res.status(404).send("Student not found");
    } else {
      console.log(`Student data fetch by its ID:${id}`);
      res.status(200).send({
        message: "Student data fetch by its ID",
        data: result,
      });
    }
  });
};

const updateStudentByID = (req, res) => {
  const id = req.params.id;
  const { name, email, age } = req.body;
  const updateQuery = `
    UPDATE Students
    SET name = ?,
        email = ?,
        age = ?
    WHERE id = ?;
    `;
  connection.execute(updateQuery, [name, email, age, id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    } else if (result.affectedRows === 0) {
      res.status(404).send("student not found");
    } else {
      console.log("Student data updated");
      res.status(200).send(`Student data updated by its ID:${id}`);
    }
  });
};

const deleteStudentByID = (req, res) => {
  const id = req.params.id;
  const deleteQuery = `
    DELETE FROM Students
    WHERE id = ?;
    `;
  connection.execute(deleteQuery, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    } else if (result.affectedRows === 0) {
      res.status(404).send("student not found");
    } else {
      console.log("Student data deleted");
      res.status(200).send(`Student data deleted by its ID:${id}`);
    }
  });
};

module.exports = {
  addNewStudent,
  getAllStudent,
  getStudentByID,
  updateStudentByID,
  deleteStudentByID,
};
