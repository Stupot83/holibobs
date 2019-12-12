const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require("./mongodb_helper");

describe("Test the user path", () => {
  beforeAll(done => {
    mongoose.connection.collections.users.drop(function() {
      return done();
    });
  });

  test("register user", done => {
    const user = {
      name: "Lena",
      email: "lena@lena.com",
      password: "helloworld",
      password2: "helloworld"
    };
    request(app)
      .post("/api/users/register")
      .send(user)
      .expect(200, () => {
        done();
      });
  });

  test("register user doesn't work, if user already registered", done => {
    const user = {
      name: "Lena",
      email: "lena@lena.com",
      password: "helloworld",
      password2: "helloworld"
    };
    request(app)
      .post("/api/users/register")
      .send(user)
      .expect(400, () => {
        done();
      });
  });
});
