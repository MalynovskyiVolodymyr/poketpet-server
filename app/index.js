
const config = require('../app-config/env/config'),
    mongoose = require('../app-config/env/mongoose'),
    express = require('../app-config/env/express'),
    socketsService = require('./services/sockets'),
    chalk = require('chalk');
    //seed = require('../app-config/env/seed').startSeed,
    //socketsService = require('./services/socket-service');

function loadModels(callback){
    console.log(chalk.blue('in load models init'));
    mongoose.loadModels(null, callback);
}

function init(callback){
    mongoose.connect(function(db){
        loadModels(function(){
            console.log(chalk.blue('in app express init'));
            let app = express.init(db);
            if(callback) callback(app, db, config);
        });
    });
}

module.exports.start = function(){

    init(function(app,db,config){

        let httpServer = require('http').createServer(app);
        var io = require('socket.io').listen(httpServer);
        httpServer.listen(config.port, function() {
            console.log(chalk.yellow('dog is running on  ' + config.port));
        });
        socketsService.initSockets(io);
    });
}