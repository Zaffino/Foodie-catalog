var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json, send } = require('express/lib/response');

test('DELETE menu', (assert) => {
  var DELmenuID = {'menuID' : 1};
  request(app).delete('/api/menu/:MenuID')
  .send(DELmenuID)
  .expect(200)
  .end((err, res) => {

      

      
      assert.error(err, 'no error')
      assert.end()
  })
})