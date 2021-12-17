var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json } = require('express/lib/response');


// test GET API per prendere il menu
test('GET menu', (assert) => {
  request(app)
      .get('/api/menu')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
          //var expectedUsers = ['John', 'Betty', 'Hal'];

          console.log(res.body)
          assert.error(err, 'No error');
          //assert.same(res.body, expectedUsers, 'Employee as expected');
          assert.end();
      });
      
});