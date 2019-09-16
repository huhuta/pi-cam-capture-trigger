const express = require('express')
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest')
const exampleRouter = require('../exampleRouter')

describe('GET /api/example', () => {
  test('It should 200 and return example', async () => {
    const app = express()
    app.use(exampleRouter)
    const res = await request(app).get('/')
    expect(res.text).toEqual('hello example!')
  })
})
