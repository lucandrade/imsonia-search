const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const Schema = mongoose.Schema({
    name: {
        type: String
    },
    url: {
        type: String
    }
});

Schema.plugin(paginate);

const Podcast = mongoose.model('Podcast', Schema);

module.exports = Podcast;