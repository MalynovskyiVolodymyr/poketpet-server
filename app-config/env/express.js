
const express = require('express'),
    cors = require('cors'),
    bodyparser = require('body-parser');

function initServerRoutes(app){
    require('../../app/router').initRoutrer(app);
}

function initMiddleware(app){
    app.use(cors());
    app.use(bodyparser.json());
}

module.exports.init = function(){

    app = express();
    initMiddleware(app);
    initServerRoutes(app);

    return app;
};
