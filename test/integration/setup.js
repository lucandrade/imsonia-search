require('dotenv').load({
    path: '.env.testing'
});

global.datasource = require(`${process.cwd()}/src/datasource`)();
global.expect = require('expect');