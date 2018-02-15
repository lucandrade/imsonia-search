const expect = require('expect');
const datasource = require(`${process.cwd()}/src/datasource`)();

describe('Model: Podcast', () => {
    afterEach(async function () {
        await datasource.models.Podcast.remove({});
        await datasource.db.close();
    });

    it('Create podcast', async function () {
        const podcast = new datasource.models.Podcast({
            name: 'some-name',
            url: 'http://some-url'
        });
        await podcast.save();
        expect(podcast.name).toBe('some-name');
    });
});