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

Schema.set('toJSON', {
    transform: function episodeSchemaToJson(doc, ret) {
        const retJson = {
            id: ret._id,
            description: ret.description,
            url: ret.url,
            podcast: ret.podcast,
        };
        return retJson;
    },
});

Schema.plugin(paginate);

const Episode = mongoose.model('Episode', Schema);

module.exports = Episode;