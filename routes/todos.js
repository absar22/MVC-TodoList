const express = require('express')
const router = express.Router()
const todosController = require('../controller/todos')

router.get('/', todosController.getTodos)
router.post('/createTodo', todosController.createTodo)
router.put('/markComplete', todosController.markComplete)
router.put('/markInComplete', todosController.markInComplete)
router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router
