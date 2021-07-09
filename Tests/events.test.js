const app = require('../app')
const chai = require('chai')
const request = require('supertest')(app)
var events = require('../routes/events');
const knex = require('knex')(require('../knexfile')['test']);


describe('test suite description', () => {
  beforeAll(() => {
    return knex.migrate.latest();
    return knex.seed.run();
  });
  // afterAll(() => {
  //   return knex.migrate.rollback()
  //   .then(() => knex.destroy());
  // });

  describe('GET /events', () => {
    test('Submits a GET req to /events', done => {
     const res = request.get('/events')
     return done()
    });

    test('Submits a GET req to /events', done => {
      const res = request.get('/events');
    //  expect(res.status).toEqual(200);
    //  expect(res.body.data).toBeDefined();
      return done()
    });
  })

  describe('POST /events', () => {
    test('Submits a POST req to /events', async () => {
     const res = await request.post('/events')
     // FIXME: Doesnt post to table
     .send({  eventTitle: "TEST EVENT",
              startDate: "2021-07-05",
              startTime: "12:00",
              endDate: "2021-07-05",
              endTime: "13:00",
              type: "task",
              location: "office",
              availability: "free",
              attendees: { Mello: "true", Briana: "true" }
            });
    });
  })

  describe('DELETE /events', () => {
    test('Submits a DELETE req to /events', async () => {
    //   const input = await request.send({eventTitle: "TEST EVENT"})

    //  await request
    //  .delete("/events")
    //  .expect(200)
    //  .then(async () => {
    //    expect(await events.findOne({ _id: input.id })).toBeFalsy()
    //  })
    });
  })
})


// describe('GET /events', () => {
//   it('should return all inputs', (done) => {
//     request.get('/events')
//     .expect(200)
//     // res.should.be.json; // jshint ignore:line
//     // res.body.should.be.a('array');
//     // res.body.length.should.equal(4);
//     // res.body[0].should.have.property('name');
//     // res.body[0].name.should.equal('Suits');
//     // res.body[0].should.have.property('channel');
//     // res.body[0].channel.should.equal('USA Network');
//     // res.body[0].should.have.property('genre');
//     // res.body[0].genre.should.equal('Drama');
//     // res.body[0].should.have.property('rating');
//     // res.body[0].rating.should.equal(3);
//     // res.body[0].should.have.property('explicit');
//     // res.body[0].explicit.should.equal(false);
//     done();
//   });
// });


// // test("input /events", async () => {
// // 	const input = {
// // 		eventTitle: "event 1",
// // 	}

// // 	await request
// // 		.post("/events")
// //     .send(input)
// // 		.expect(200)
// // 		.then( async (response) => {
// // 			expect(response.body.eventTitle).toBe(input.eventTitle)
// // 		})
// // })


