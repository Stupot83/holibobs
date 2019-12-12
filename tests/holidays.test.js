const mongoose = require("mongoose");
const request = require('supertest');
const app = require ('../app')
require("./mongodb_helper");

describe('Test the holidays path', () => {
    beforeAll((done) => {
        mongoose.connection.collections.holidays.drop(function() {
            return done();
        });
    })

    test('Empty array return when no holidays', (done) => {
        request(app).get('/api/holidays').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual([]);
            done();
        });
    });
});
