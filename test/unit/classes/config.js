const expect = require('expect');
const config = require(`${process.cwd()}/src/classes/config`);

describe('Config', () => {
    it('existing file with existing value', function () {
        process.env.PORT = 124;
        expect(config('app.port')).toBe(process.env.PORT);
    });

    it('existing file with default value', function () {
        expect(config('app.lang', 'en')).toBe('en');
    });

    it('missing file', function () {
        expect(config('missingfile.lang', 123)).toBe(123);
    });

    it('environment', function () {
        expect(config('env')).toBe('test');
    });
});