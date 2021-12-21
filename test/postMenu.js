test('POST /menu/:MenuID', (assert) => {
  jsonToSend = {"menuType" : "table", "menuList" : [{"piattoID": 0,"name": "vellutata misteriosa","prezzo": 10.50,"image": "../images/logo.png","descrizione": "vellutata della mensa, gg ez sei avvelenato"}]};
  request(app)
    .post('/api/menu/:MenuID?test=true')
    .send(jsonToSend)
    .set('Accept', 'json')
    .expect(function(res) {
      
      res.body.name = res.body.name;
    })
    .expect(200)
    .end((err, res) => {
        
        assert.error(err, "no errors")
        assert.end();
    })

    
});