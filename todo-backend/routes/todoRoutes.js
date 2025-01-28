const express = require("express")
const {getTodos, addTodos} = require("../controllers/todoController")
const { get } = require("mongoose")

const router = express.Router()

router.get("/get-todos", getTodos) 

router.post("/add-todos", addTodos)

// Todo: Implement the logic for handling deletion of todos
// router.delete("/:id",)

module.exports = router;