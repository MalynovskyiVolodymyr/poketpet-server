
const chalk = require('chalk'),
    mongoose = require('mongoose'),
    common = require('./common');

const petModel = 'UserPet';

exports.petCreate = async (newPet) => {
    let Pet = await common.getModel(petModel);
    return new Promise((resolve, reject) => {
        Pet.create(newPet,function(err,result){
            if(err){
                console.log(chalk.blue(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};

exports.petUpdate = async (pet) => {
    let Pet = await common.getModel(petModel);
    return new Promise((resolve, reject) => {
        Pet.updateOne({_id: mongoose.Types.ObjectId(pet.id)}, {
            petName: pet.petName,
            petAge: pet.petAge,
            petWeigh: pet.petWeigh,
            petHeight: pet.petHeight,
            breed: pet.breed,
            masters: pet.masters
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

exports.petDeleteById = async (petId) => {
    let Pet = await common.getModel(petModel);
    return new Promise((resolve, reject) => {
        Pet.deleteOne({_id:mongoose.Types.ObjectId(petId)}, err => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve({result: 'OK'});
            }
        })
    })
};

exports.petGetById = async (petId) => {
    let Pet = await common.getModel(petModel);
    return new Promise((resolve, reject) => {
        Pet.find({_id: mongoose.Types.ObjectId(petId)}, (err, result) => {
            if(err){
                console.log(chalk.red(err));
                reject({'error':err.message});
            }else{
                return resolve(result);
            }
        })
    })
};