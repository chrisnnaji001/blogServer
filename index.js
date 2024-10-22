const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const dbUrl = process.env.MONGODB_URL
mongoose.connect(dbUrl)
.then(() => {



    app.get('/', (req, res) => {  
        res.send("<h1> Hello Chris </h1>")
    });
    
    app.listen(port, () => {
        console.log(` New server listening at http://localhost:${port}`)
    });
}).catch((err) => {
    console.log('failed to connect to MongoDB', err)
})

