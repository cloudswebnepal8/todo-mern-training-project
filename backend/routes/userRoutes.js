const express = require("express");

const router = express.Router();
const controller=require("../controllers/create")
// const {addStudent,getStudent}=require("../controllers/create")
// const { deleteuser,getUserById,getUsers } = require("../controllers/userController")
// router.delete("/users/:id", deleteuser)

// router.get("/users", getUsers);

// router.get("/users/:id", getUserById);
router.post("/students",controller.addStudent)
// router.get("/students",controller.getStudent)
// router.put("/students/:id",controller.updateStudent)

module.exports = router;