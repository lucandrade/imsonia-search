const HttpStatus = require('http-status');

const success = (data, statusCode = HttpStatus.OK) => {
    return {
        data,
        statusCode
    };
};

const error = (err, statusCode = HttpStatus.BAD_REQUEST) => {
    if (err.errors) {
        const messages = {};
        for (const field in err.errors) {
            if (err.errors[field].message) {
                messages[field] = err.errors[field].message;
            }
        }

        if (Object.keys(messages).length > 0) {
            return success({
                messages,
            }, statusCode);
        }
    } else if (typeof err === 'object') {
        return success({
            error: err,
        }, statusCode);
    }

    return success({
        error: err,
    }, statusCode);
};

module.exports = {
    success,
    error
};