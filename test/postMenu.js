var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json, send } = require('express/lib/response');


test('POST /menu', (assert) => {
  jsonToSend = {"menuType" : "table", "menuList" : [{"piattoID": 0,"name": "vellutata misteriosa","prezzo": 10.50,"image": "../images/logo.png","descrizione": "vellutata della mensa, gg ez sei avvelenato"}]};
  request(app)
    .post('/api/menu')
    .send(jsonToSend)
    .set('Accept', 'json')
    .expect(function(res) {
      
      res.body.name = res.body.name;
    })
    .expect(200, {
      menuID: 2,
      menuType: 'table',
      menuList: [{"piattoID": 0,"name": "vellutata misteriosa","prezzo": 10.50,"image": "../images/logo.png","descrizione": "vellutata della mensa, gg ez sei avvelenato"}]
    })
    .end((err, res) => {
        console.log(res.body)
        assert.error(err, "no errors")
    })
    
});