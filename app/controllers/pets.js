
const petService = require('../services/pets'),
    chalk = require('chalk');

exports.petCreate = async (req, res) => {
    await petService.petCreate(req.body).then(
        result => {
            res.json(result);
        },err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    );
};

exports.petUpdate = async (req, res) => {
    await petService.petUpdate(req.body).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.petDelete = async (req, res) => {
    await  petService.petDeleteById(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};

exports.petGetById = async (req, res) => {
    await  petService.petGetById(req.query.id).then(
        result => {
            res.json(result)
        }, err => {
            console.log(chalk.red(err));
            res.status(500);
            res.json(err);
        }
    )
};