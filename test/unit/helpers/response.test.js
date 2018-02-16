const response = require(`${process.cwd()}/src/helpers/response`);

describe('Helper: Response', () => {
    it('should return 200 as default value for success', function () {
        const result = response.success('message');
        expect(result).toHaveProperty('data');
        expect(result).toHaveProperty('statusCode');
        expect(result.data).toBe('message');
        expect(result.statusCode).toBe(200);
    });

    it('should return status code passed as parameter', function () {
        const result = response.success('message', 300);
        expect(result.statusCode).toBe(300);
    });

    it('should return 500 as default value for error', function () {
        const result = response.error('message');
        expect(result).toHaveProperty('data');
        expect(result).toHaveProperty('statusCode');
        expect(result.statusCode).toBe(400);
        expect(result.data).toHaveProperty('error');
        expect(result.data.error).toBe('message');
    });
});