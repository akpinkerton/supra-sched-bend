const app = require('../app')
const request = require('supertest')(app)
const expect = require('chai').expect;
const knex = require('knex')(require('../knexfile')['development']);
var availTimes = require('../routes/availTimes');

describe('Testing is functional', () => {
  it('Submits a GET req to /availableTimes', done => {
    request.get('/availableTimes')
  //  .expect('Content-Length', '189')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      expect(res.body[0].startTime).to.be.a('string')
      expect(res.body.length).to.not.equal(0);
      if (err) return done(err);
      return done();
    });
  })
})
