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

Schema.set('toJSON', {
    transform: function podcastSchemaToJson(doc, ret) {
        const retJson = {
            id: ret._id,
            name: ret.name,
            url: ret.url
        };
        return retJson;
    },
});

Schema.plugin(paginate);

const Podcast = mongoose.model('Podcast', Schema);

module.exports = Podcast;