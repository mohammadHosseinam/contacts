const express = require('express')
const cors = require("cors");
const appRootPath = require("app-root-path")
const mongoose = require('mongoose');

app = express()

require('dotenv').config({
    path: appRootPath + "/.env"
})

app.use(cors())
app.use(express.json({extended: true}))
app.use('/api',require('./routes').loginRoute)
app.use('/api',require('./routes').signInRoute)

mongoose.connect('mongodb://127.0.0.1:27017/contactsTask').then((res)=>{
    console.log("DB conected Ok!")
})

app.post("")
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`server is run at port ${PORT}`)})