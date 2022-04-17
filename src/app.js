require('dotenv').config()
const express = require('express')
const app = express()
const userRoute = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/users', userRoute)

app.listen(process.env.PORT  || process.env.LOCAL_PORT, () => 
    console.log(`working on ${process.env.PORT  || process.env.LOCAL_PORT}`)
)