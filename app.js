const express = require('express');
const app = express();
const users = require('./routes/users');
const items = require('./routes/items')
const mongoose = require('mongoose');
const connectDB = require('./db')
const bodyParser = require('body-parser')

//Body parser middleware
app.use(bodyParser.json());

//DB Connect
connectDB();

app.use(express.urlencoded({ extended: true }));
//Dynamic Routes
app.use('/users', users);
app.use ('/items', items);

//Static routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


module.exports = app;