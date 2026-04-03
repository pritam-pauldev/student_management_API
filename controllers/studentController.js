const connection = require("../utils/db_connection");
const Students = require("../models/students");

const addNewStudent = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    await Students.create({
      name: name,
      email: email,
      age: age,
    });
    console.log("New studdent added");
    res
      .status(201)
      .send(
        `name:${name}, email:${email}, age${age} inserted into the database`,
      );
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getAllStudent = async (req, res) => {
  try {
    const student = await Students.findAll();
    console.log("Get All Student");
    const result = student.map((s) => s.toJSON());
    res.status(200).send({
      message: "All Students data fetched",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getStudentByID = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Students.findByPk(id);

    // 404
    if (!student) {
      return res.status(404).send({
        message: "Student not found",
      });
    }

    console.log("Get Student by ID");
    const result = student?.toJSON();
    res.status(200).send({
      message: "Student data fetched",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateStudentByID = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email, age } = req.body;
    console.log(name, email, age);
    const student = await Students.findByPk(id);
    if (!student) {
      return res.status(404).send({
        message: "Student not found",
      });
    }
    await student.update({ name: name, email: email, age: age });
    console.log("Student data updated");
    res.status(200).send(`Student data updated by its ID:${id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteStudentByID = async (req, res) => {
  try {
    const id = req.params.id;
    const student = await Students.findByPk(id);
    if (!student) {
      console.log("Student not found");
      res.status(404).send("Student not found");
      return;
    }
    student.destroy();
    console.log("Student data deleted");
    res.status(200).send(`Student data deleted by its ID:${id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  addNewStudent,
  getAllStudent,
  getStudentByID,
  updateStudentByID,
  deleteStudentByID,
};
