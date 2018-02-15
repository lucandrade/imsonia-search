const mongoose = require('mongoose');

const Podcast = mongoose.model('Podcast', {
    name: {
        type: String
    },
    url: {
        type: String
    }
});

module.exports = Podcast;