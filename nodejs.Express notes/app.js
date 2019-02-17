const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');

const userRoutes = require('./routes/user');//<----
const stuffRoutes = require('./routes/stuff');

mongoose.connect('mongodb+srv://test1:test123@cluster0-nfjer.mongodb.net/test?retryWrites=true', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.log("Unable to connect to DB...");
        console.error(error);
    });

app.use(bodyParser.json()); 

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);//<---

module.exports = app;