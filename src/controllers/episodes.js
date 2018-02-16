const response = require('../helpers/response');
const _ = require('lodash');

class Episodes {
    constructor(app) {
        this.app = app;
        this.model = app.datasource.models.Episode;
    }

    async get(req, res) {
        try {
            const episodes = await this.model.paginate({
                
            }, {
                page: _.get(req, 'params.page', 1),
                populate: 'podcast'
            });
            return res.send(response.success(episodes));
        } catch (e) {
            return res.send(response.error('Error retrieving episodes'));
        }
    }
}

module.exports = Episodes;