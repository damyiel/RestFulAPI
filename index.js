const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//Import 
const toDoRouter = require('./Routes/ListRoute')
app.use('/lists', toDoRouter)

//database connection
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () =>
    console.log("Succesful connection to database")
)

// server connection
app.listen(3000, () => console.log('Succesfull'))