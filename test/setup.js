const env = process.env.NODE_ENV || 'development';

switch (env) {
    case 'test':
        require('dotenv').load({
            path: '.env.testing'
        });
        break;
    default:
        require('dotenv').load();
        break;
}

global.datasource = require(`${process.cwd()}/src/datasource`)();
global.expect = require('expect');