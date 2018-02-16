const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const datasource = require('./src/datasource');
const routes = require('./src/routes');

const app = express();

app.datasource = datasource();
app.use(bodyParser.json());
app.use(helmet());

routes(app);

app.get('/', (req, res) => res.send('It\'s alive!'));

module.exports = app;