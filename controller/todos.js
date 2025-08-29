const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            // res.render('todos.ejs', {todos: todoItems, left: itemsLeft,user: null})
            res.render('todos.ejs', { todos: todoItems, left: itemsLeft, user: req.user || { userName: 'Guest' } })

        }catch(err){
            console.log(err)
            
      res.status(500).send("Server Error")
        }
    },
      createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req,res) => {
            console.log("BODY:", req.body) 
          console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
             res.status(500).json("Delete failed")
        }
    }

}

