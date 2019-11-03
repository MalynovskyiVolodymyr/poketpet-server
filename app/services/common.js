
const mongoose = require('mongoose');

exports.getModel = async (modelName) => {
    return mongoose.model(modelName);
};
