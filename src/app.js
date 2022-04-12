require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.listen(process.env.PORT  || process.env.LOCAL_PORT, () => 
    console.log(`working on ${process.env.PORT  || process.env.LOCAL_PORT}`)
);