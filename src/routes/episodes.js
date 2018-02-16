const EpisodesController = require('../controllers/episodes');

module.exports = (app) => {
    const controller = new EpisodesController(app);

    app.route('/episodes')
        .get(controller.get.bind(controller));
}