const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const mainRoutes = require('./routes/main')
const todosRoutes = require('./routes/todos')

const PORT = 8000


dotenv.config({ path: './config/config.env' })

connectDB()

// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', mainRoutes)
app.use('/todos', todosRoutes)

app.listen(process.env.PORT || PORT , () => console.log(`Listining on PORT ${PORT}`))