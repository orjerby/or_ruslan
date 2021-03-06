const express = require('express')
const cookieParser = require('cookie-parser')
require('./db/mongoose')
const path = require('path')
const sprintRouter = require('./routers/sprint')
const projectRouter = require('./routers/project')
const issueRouter = require('./routers/issue')
const todoRouter = require('./routers/todo')
const backlogRouter = require('./routers/backlog')
const userRouter = require('./routers/user')

const app = express()

// make express expect to get json in the api calls
app.use(express.json())
app.use(cookieParser())

// make express knows about our client(react) folder in our heroku's files
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')))

app.use(projectRouter)
app.use(sprintRouter)
app.use(issueRouter)
app.use(todoRouter)
app.use(backlogRouter)
app.use(userRouter)

// if the user try to enter the url, express will take him to our client(react)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'client', 'build', 'index.html'))
})

module.exports = app