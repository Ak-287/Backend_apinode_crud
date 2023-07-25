require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoute  = require('./routes/UserRoute');
const errormiddleware = require('./middleware/errormiddleware')
const swaggerjs = require("swagger-jsdoc")
const swaggerui = require("swagger-ui-express")

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users',userRoute); 
app.use(errormiddleware);



mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('connected to database')
    app.listen(PORT,() => {
        console.log(`Node API is running on port ${PORT}`)
    })
}).catch((error) =>{
    console.log(error)
})