
const familyService = require('../services/families'),
    chalk = require('chalk');

exports.familyCreate = async (req, res) => {
    await familyService.familyCreate(req.body).then(
        result => {
            res.json(result);
        },err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    );
};

exports.familyUpdate = async (req, res) => {
    await familyService.familyUpdate(req.body).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.familyDelete = async (req, res) => {
    await  familyService.familyDeleteById(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.familyGetById = async (req, res) => {
    await  familyService.familyGetById(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};