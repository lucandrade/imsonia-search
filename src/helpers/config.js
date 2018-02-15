const fs = require('fs');
const cache = {};
const vars = {
    env: process.env.NODE_ENV || 'development'
};

function loadPath(data, parts) {
    if (parts.length < 1) {
        return data;
    }

    const current = parts.shift();
    
    if (data.hasOwnProperty(current)) {
        return loadPath(data[current], parts);
    }

    return null;
}

function loadFile(filename) {
    const path = `${__dirname}/../config/${filename}`;

    if (fs.existsSync(`${path}.js`)) {
        return require(path);
    }

    return null;
}

function getFile(filename) {
    if (cache.hasOwnProperty(filename)) {
        return cache[filename];
    }

    const data = loadFile(filename);

    if (data) {
        cache[filename] = data;
        return cache[filename];
    }

    return null;
}

function config(path, defaultValue = null) {
    const parts = path.split('.');

    const file = getFile(parts.shift());

    if (file) {
        const data = loadPath(file, parts);
        return data || defaultValue;
    }

    return vars[path] || defaultValue;
}

module.exports = config;