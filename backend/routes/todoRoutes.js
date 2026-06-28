const router = require("express").Router();

const auth = require("../middleware/auth");

const todo = require("../controllers/todoController");

router.get("/", auth, todo.getTodos);

router.post("/", auth, todo.addTodo);

router.put("/:id", auth, todo.updateTodo);

router.delete("/:id", auth, todo.deleteTodo);

module.exports = router;