const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/", controller.getAllStudent);
router.get("/:id", controller.getStudentByID);
router.post("/", controller.addNewStudent);
router.put("/:id", controller.updateStudentByID);
router.delete("/:id", controller.deleteStudentByID);

module.exports = router;

