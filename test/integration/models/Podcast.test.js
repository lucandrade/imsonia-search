describe('Model: Podcast', () => {
    afterEach(async function () {
        await datasource.models.Podcast.remove({});
    });

    it('Create podcast', async () => {
        const podcast = await datasource.models.Podcast.create({
            name: 'some-name',
            url: 'http://some-url'
        });
        expect(podcast.name).toBe('some-name');
    });

    it('Paginate podcasts', async () => {
        await datasource.models.Podcast.create({
            name: 'some-name',
            url: 'http://some-url'
        }, {
            name: 'some-name-2',
            url: 'http://some-url-2'
        });

        const result = await datasource.models.Podcast.paginate({}, {
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