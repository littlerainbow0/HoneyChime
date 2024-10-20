const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/', index);


module.exports = app;
