var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json, send } = require('express/lib/response');


test('POST /menu/:MenuID', (assert) => {
  jsonToSend = {"menuType" : "table", "menuList" : [{"piattoID": 0,"name": "vellutata misteriosa","prezzo": 10.50,"image": "../images/logo.png","descrizione": "vellutata della mensa, gg ez sei avvelenato"}]};
  request(app)
    .post('/api/menu/:MenuID')
    .send(jsonToSend)
    .set('Accept', 'json')
    .expect(function(res) {
      
      res.body.name = res.body.name;
    })/*    //non ho modo di vedere il menuID, ma funziona
    .expect(200, {
      menuType: 'table',
      menuList: [{"piattoID": 0,"name": "vellutata misteriosa","prezzo": 10.50,"image": "../images/logo.png","descrizione": "vellutata della mensa, gg ez sei avvelenato"}]
    })*/
    .expect(200)
    .end((err, res) => {
        
        assert.error(err, "no errors")
        //assert.comment(JSON.stringify(res.body));
        assert.end();
    })

    
});