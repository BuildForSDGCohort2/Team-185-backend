const express = require('express');
const app = express();
const userModel = require('./routes/api/users');
const expense_items = require('./routes/api/expense_items');
const income_items = require('./routes/api/income_items');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require ('config')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
//Body parser middleware
app.use(bodyParser.json());

//DB Config
const db = config.get('mongoURI')

//Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}) //Adding new mongo url parser
  .then(() => console.log('******Mongo DB Connected******'))
  .catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }));

//Dynamic Routes
app.use ('/api/users',  require('./routes/api/users'));
app.use ('/api/expense_items',  require('./routes/api/expense_items'));
app.use ('/api/income_items',  require('./routes/api/income_items'));
app.use ('/api/auth', require('./routes/api/auth'))

//Static routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;