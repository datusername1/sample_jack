const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const agentRoute = require('./routes/agent');
const homeRoute = require('./routes/home');
const findRoute = require('./routes/find');

const app = express();
//express port 1128;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/jack', agentRoute);
app.use('/jack', homeRoute);
app.use('/jack', findRoute);

module.exports = app;
