const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const config = require('./classes/config');

let database = null;

const loadModels = () => {
    const dir = path.join(__dirname, './models');
    const models = [];
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        const model = require(modelDir);
        models[model.modelName] = model;
    });
    return models;
}

function load() {
    if (!database) {
        database = {};
        mongoose.Promise = global.Promise;
        mongoose.connect(`${config('database.uri')}/${config('database.name')}`);
        database.db = mongoose.connection;

        database.models = loadModels();
    }

    return database;
}

module.exports = load;