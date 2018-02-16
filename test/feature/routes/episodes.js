describe('Route: Episodes', () => {
    before(async () => {
        await app.datasource.models.Podcast.remove({});
        await app.datasource.models.Episode.remove({});
    });

    beforeEach(async () => {
        const podcast = await app.datasource.models.Podcast.create({
            name: 'podcast',
            url: 'http://podcast'
        });
        await app.datasource.models.Episode.create({
            description: 'some-description',
            url: 'http://episode',
            podcast: podcast._id
        });
    });

    afterEach(async () => {
        await app.datasource.models.Podcast.remove({});
        await app.datasource.models.Episode.remove({});
    });

    it('should list episodes', (done) => {
        request(app)
            .get('/episodes')
            .end((err, res) => {
                expect(res.body).toHaveProperty('data');
                const { data } = res.body;
                
                expect(data).toHaveProperty('total');
                expect(data).toHaveProperty('page');
                expect(data).toHaveProperty('pages');

                expect(data.total).toBe(1);
                expect(data.page).toBe(1);
                expect(data.pages).toBe(1);
                done();
            });
    });
});