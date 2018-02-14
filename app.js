require('dotenv').load();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.get('/', (req, res) => res.send('It\'s alive!'));

module.exports = app;