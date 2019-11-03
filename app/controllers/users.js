
const userService = require('../services/users'),
      chalk = require('chalk');

exports.userCreate = async (req, res) => {
    await userService.userCreate(req.body).then(
        result => {
            res.json(result);
        },err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    );
};

exports.userUpdate = async (req, res) => {
    await userService.userUpdate(req.body).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.userDelete = async (req, res) => {
    await  userService.userDeleteById(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.userGetById = async (req, res) => {
    await  userService.userGetById(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.userGetByDeviceId = async (req, res) => {
    console.log(req.query.id);
    await userService.userGetByDeviceId(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};