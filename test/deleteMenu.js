var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json, send } = require('express/lib/response');

test('DELETE /menu', (assert) => {
  var DELmenuID = {'MenuID' : 0}
  request(app)
  .post('/api/menu/:MenuID')
  .field('MenuID', 0)
  .expect(200)
  .end((err, res) => {

          
      assert.error(err, 'no error')
      assert.end()
  })
})