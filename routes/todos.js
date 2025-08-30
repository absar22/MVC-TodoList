const express = require('express')
const router = express.Router()
const todosController = require('../controller/todos')

router.put('/markComplete', todosController.markComplete)
router.delete('/deleteTodo', todosController.deleteTodo)
router.post('/createTodo', todosController.createTodo)
router.get('/', todosController.getTodos)

module.exports = router
