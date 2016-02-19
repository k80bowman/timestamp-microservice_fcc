'use strict';

var controllers = require(process.cwd() + '/app/controllers');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    
    app.get('/:query', controllers.timestamp);
};

//capture the string from the url