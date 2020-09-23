const express = require('express');
const app = express();
const users = require('./routes/users');
const expense_items = require('./routes/api/expense_items');
const income_items = require('./routes/api/income_items');
const mongoose = require('mongoose');
const connectDB = require('./db');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
//Body parser middleware
app.use(bodyParser.json());

//DB Connect
connectDB();

app.use(express.urlencoded({ extended: true }));

//Dynamic Routes
app.use('/users', users);
app.use ('/api/expense_items', expense_items);
app.use ('/api/income_items', income_items);

//Static routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


module.exports = app;