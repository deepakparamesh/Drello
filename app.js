const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const users = require('./routes/users');
const boards = require('./routes/boards');

// connect to database
mongoose.connect(config.database , {useNewUrlParser: true});

// On connection
mongoose.connection.on('connected', () => {
  console.log('connected to database ' +  config.database);
});


// on error connection
mongoose.connection.on('error', (err) => {
  console.log('database error: ' + err);
});

const app = express();

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());
app.use('/users', users);
app.use('/boards', boards);

// Index Route
app.get('/', (req, res) => {
  res.send('invalid EndPoint');
});


// Start Server
app.listen(port, () => {
  console.log('server started on port' + port);
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))
