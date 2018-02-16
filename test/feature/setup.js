require('dotenv').load({
    path: '.env.testing'
});

global.app = require(`${process.cwd()}/app`);
global.request = require('supertest');
global.expect = require('expect');