
const chalk = require('chalk'),
    mongoose = require('mongoose'),
    common = require('./common');

const userModel = 'User';

exports.userCreate = async (newUser) => {
    let User = await common.getModel(userModel);
    return new Promise((resolve, reject) => {
        User.create(newUser,function(err,result){
            if(err){
                console.log(chalk.blue(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};

exports.userUpdate = async (user) => {
    let User = await common.getModel(userModel);
    return new Promise((resolve, reject) => {
        User.updateOne({_id: mongoose.Types.ObjectId(user.id)},{
            deviceID: user.deviceID,
            email: user.email,
            phoneNumber: user.phoneNumber,
            firstName: user.firstName,
            lastName: user.lastName,
            middleName: user.middleName,
            userAge: user.userAge,
            petIDs: user.petIDs

        },function(err){
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve({result: 'OK'});
            }
        })
    })
};

exports.userDeleteById = async (userId) => {
    let User = await common.getModel(userModel);
    return new Promise((resolve, reject) => {
        User.deleteOne({_id:mongoose.Types.ObjectId(userId)}, err => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve({result: 'OK'});
            }
        })
    })
};

exports.userGetById = async (userId) => {
    let User = await common.getModel(userModel);
    return new Promise((resolve, reject) => {
        User.findOne({_id: mongoose.Types.ObjectId(userId)}, (err, result) => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};

exports.userGetByDeviceId = async (deviceId) => {
    let User = await common.getModel(userModel);
    return new Promise((resolve, reject) => {
        User.findOne({deviceID: deviceId}, (err, result) => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};