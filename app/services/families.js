
const chalk = require('chalk'),
    mongoose = require('mongoose'),
    common = require('./common');

const familyModel = 'Family';

exports.familyCreate = async (newFamily) => {
    let Family = await common.getModel(familyModel);
    return new Promise((resolve, reject) => {
        Family.create(newFamily,function(err,result){
            if(err){
                console.log(chalk.blue(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};

exports.familyUpdate = async (family) => {
    let Family = await common.getModel(familyModel);
    return new Promise((resolve, reject) => {
        Family.updateOne({_id: mongoose.Types.ObjectId(family.id)}, {
            ownerID: family.ownerID,
            familyName: family.familyName,
            membersIDs: family.membersIDs
        }, function (err) {
            if (err) {
                console.log(chalk.red(err));
                reject({'error': err.message});
            } else {
                return resolve({result: 'OK'});
            }
        })
    })
};

exports.familyDeleteById = async (familyId) => {
    let Family = await common.getModel(familyModel);
    return new Promise((resolve, reject) => {
        Family.deleteOne({_id:mongoose.Types.ObjectId(familyId)}, err => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve({result: 'OK'});
            }
        })
    })
};

exports.familyGetById = async (familyId) => {
    let Family = await common.getModel(familyModel);
    return new Promise((resolve, reject) => {
        Family.find({_id: mongoose.Types.ObjectId(familyId)}, (err, result) => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};