const app = require('../app')
const expect = require('chai').expect;
const request = require('supertest')(app)
var events = require('../routes/events');
const knex = require('knex')(require('../knexfile')['test']);

describe('test suite description', () => {
  // beforeAll(() => {
  //   return knex.migrate.latest();
  //   return knex.seed.run();
  // });
  // afterAll(() => {
  //   return knex.migrate.rollback()
  //   .then(() => knex.destroy());
  // });

  describe('POST /events', () => {
    it('Submits a POST req to /events', done => {
     request.post('/events')
     .set('Accept', 'application/json')
     .expect('Content-Type', /json/)
     .send(  'eventTitle= TEST EVENT'
              // startDate: "2021-07-05",
              // startTime: "12:00",
              // endDate: "2021-07-05",
              // endTime: "13:00",
              // type: "task",
              // location: "office",
              // availability: "free",
              // attendees: { Mello: "true", Briana: "true" }
     )
      .end(function(err, res) {
        expect(res.body).to.exist;
        if (err) return done(err);
        return done();
      });
    });
  })



//   // // test("input /events", async () => {
// // // 	const input = {
// // // 		eventTitle: "event 1",
// // // 	}

// // // 	await request
// // // 		.post("/events")
// // //     .send(input)
// // // 		.expect(200)
// // // 		.then( async (response) => {
// // // 			expect(response.body.eventTitle).toBe(input.eventTitle)
// // // 		})
// // // })

    // describe('DELETE /events', () => {
    // test('Submits a DELETE req to /events', async () => {
    //   const input = await request.send({eventTitle: "TEST EVENT"})

    //  await request
    //  .delete("/events")
    //  .expect(200)
    //  .then(async () => {
    //    expect(await events.findOne({ _id: input.id })).toBeFalsy()
    //  })
    //  });
    // })
})



