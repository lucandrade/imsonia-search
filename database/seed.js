require('dotenv').load();
const data = require('./data');
const datasource = require('../src/datasource')();

async function seed() {
    await datasource.models.Podcast.remove({});
    await datasource.models.Podcast.remove({});

    let podcast;
    let episode;
    let itemPodcast;
    let itemEpisode;

    for (let i in data) {
        itemPodcast = data[i];
        podcast = await datasource.models.Podcast.create({
            name: itemPodcast.name,
            url: itemPodcast.url
        });

        console.log(`Podcast created ${podcast.name}`);

        for (let e in itemPodcast.episodes) {
            itemEpisode = itemPodcast.episodes[e];
            episode = await datasource.models.Episode.create({
                description: itemEpisode.description,
                url: itemEpisode.url,
                podcast: podcast._id
            });

            console.log(`Episode created ${episode.description}`);
        }
    }
}

(async function () {
    await seed();
    process.exit(0);
})();