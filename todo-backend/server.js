const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const connectDB = require("./models/db")
const todoRoutes = require("./routes/todoRoutes")

require('dotenv').config()

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

app.use('/api', todoRoutes)

connectDB()

module.exports = app;
//app.use()
