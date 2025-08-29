const express = require('express')
const todosController = require('../controller/todos')
const router = express.Router()

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

module.exports = router