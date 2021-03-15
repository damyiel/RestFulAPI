const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
//Import 
const toDoRouter = require('./Routes/ListRoute')
app.use('/lists', toDoRouter)

//database connection
require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () =>
    console.log("Succesful connection to database")
)
// server connection
app.listen(8080, () => console.log('Succesfull'))