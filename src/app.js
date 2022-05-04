require('dotenv').config()
const express = require('express')
const app = express()
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')
const categoryRoute = require('./routes/category')
const cors = require('cors');
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')))
app.use(cors())

app.use('/users', userRoute)
app.use('/posts', postRoute)
app.use('/categories', categoryRoute)

app.listen(process.env.PORT  || process.env.LOCAL_PORT, () => 
    console.log(`working on ${process.env.PORT  || process.env.LOCAL_PORT}`)
)