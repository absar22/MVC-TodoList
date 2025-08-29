const express = require('express')
const todosController = require('../controller/todos')
const router = express.Router()

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)
router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router