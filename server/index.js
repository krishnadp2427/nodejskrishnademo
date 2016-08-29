//strict mode is required because I am using es6.
require('strict-mode')(() => {
const config = require('../config/config');
const express  = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('../routes/routes');

const port = config.server.port;
const app  = express();

require('../libraries/promisify-all')(['mongoose']);

mongoose.connect(config.mongo.url).then(() => {console.log('successful');}).catch(() => {console.log(`error`);})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => { console.log(`Server listening on port ${port}`); });

module.exports = app;
})