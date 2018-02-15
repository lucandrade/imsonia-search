const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const Schema = mongoose.Schema({
    description: {
        type: String
    },
    url: {
        type: String
    },
    podcast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Podcast',
        required: true
    }
});

Schema.plugin(paginate);

const Episode = mongoose.model('Episode', Schema);

module.exports = Episode;