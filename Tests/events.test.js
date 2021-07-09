const app = require('../app')
const expect = require('chai').expect;
const request = require('supertest')(app)
var events = require('../routes/events');
const knex = require('knex')(require('../knexfile')['test']);

describe('GET /events', () => {
  it('Submits a GET req to /events', done => {
    request.get('/events')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res) {
      expect(res.body.length).to.not.equal(0)
      expect(res.body[0].eventTitle).to.be.a('string')
      expect(res.body[0].startDate).to.be.a('string')
      expect(res.body[0].startTime).to.be.a('string')
      expect(res.body[0].endDate).to.be.a('string')
      expect(res.body[0].endTime).to.be.a('string')
      expect(res.body[0].type).to.be.a('string')
      expect(res.body[0].location).to.be.a('string')
      expect(res.body[0].availability).to.be.a('string')
      expect(res.body[0].attendees).to.be.an('object')
      if (err) return done(err);
      return done();
    });
  });
})






