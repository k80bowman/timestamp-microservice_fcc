'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var api = require('./app/controllers/timestamp.js');

var app = express();

routes(app);

// serve static content (css, images, js)
app.use('/public', express.static(__dirname + '/public'));

app.listen(8080, function () {
    console.log('Listening on port 8080...');
});
