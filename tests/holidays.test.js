const mongoose = require("mongoose");
const request = require('supertest');
const app = require ('../app')
require("./mongodb_helper");

describe('Test the holidays path', () => {

    beforeAll((done) => {
    //     const user = {
    //      name: "Lena",
    //      email: "lena@lena.com",
    //      password: "helloworld",
    //      password2: "helloworld"
    //     }
    //     request(app)
    //     .post('/api/register')
    //     .send(user)
    //     .then(() => console.log("user created"))
    //     .catch((err) => console.log(err));

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
