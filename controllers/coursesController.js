const Courses = require("../models/courses");
const Student = require("../models/students");

const addCourses = async (req, res) => {
  try {
    const { name } = req.body;
    const course = Courses.create({ name: name });
    console.log("new course added");
    res.status(201).json({ name: name });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const addStudentsToCourses = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;
    const student = await Student.findByPk(studentId);
    const course = await Courses.findAll({
      where: {
        id: courseId,
      },
    });
    await student.addCourses(course);
    const updatedStudent = await Student.findByPk(studentId, {
      include: Courses,
    });
    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addCourses,
  addStudentsToCourses,
};
