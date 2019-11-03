
const mongoose = require('mongoose'),
    config = require('./config'),
    chalk = require('chalk');

module.exports.loadModels = function(callback, next){
    require('../models/user');
    require('../models/pet');
    require('../models/family');
    if(callback && next){
        callback(next);
    } else if(next){
        next();
    }
};

module.exports.connect = function(callback){
    const db = mongoose.connect(config.db.uri, function(err){
        if(err){
            console.log(chalk.red('Could not connect to MongoDB!'));
        }else{
            console.log(chalk.yellow('Connection established'));
            if(callback){
                callback(db);
            }
        }
    })
};

module.exports.disconnect = function(callback){
    mongoose.disconnect(function(err){
        console.info(chalk.yellow('disconnected from MongoDB'));
    })
};
