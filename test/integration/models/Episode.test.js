describe('Model: Episode', () => {
    afterEach(async function () {
        await datasource.models.Podcast.remove({});
        await datasource.models.Episode.remove({});
    });

    it('Create episode', async () => {
        const podcast = await datasource.models.Podcast.create({
            name: 'some-name',
            url: 'http://some-url'
        });
        const episode = await datasource.models.Episode.create({
            description: 'some-description',
            url: 'http://some-url',
            podcast: podcast._id
        });
        expect(episode.description).toBe('some-description');
    });

    it('Paginate episodes', async () => {
        const podcast = await datasource.models.Podcast.create({
            name: 'some-name',
            url: 'http://some-url'
        });
        
        await datasource.models.Episode.create({
            description: 'some-description',
            url: 'http://some-url',
            podcast: podcast._id
        }, {
            description: 'some-description-2',
            url: 'http://some-url-2',
            podcast: podcast._id
        });

        const result = await datasource.models.Episode.paginate({}, {
            page: 1,
            limit: 1
        });

        expect(result).toHaveProperty('total');
        expect(result).toHaveProperty('page');
        expect(result).toHaveProperty('pages');

        expect(result.total).toBe(2);
        expect(result.page).toBe(1);
        expect(result.pages).toBe(2);
    });
});