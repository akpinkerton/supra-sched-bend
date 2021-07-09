const app = require('../app')
const request = require('supertest')(app)
const knex = require('knex')(require('../knexfile')['test']);


describe('Testing is functional', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

