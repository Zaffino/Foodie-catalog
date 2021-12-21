test('POST /dipendenti', (assert) => {
    jsonToSend = {"name":"Gioacchino Baracca","password":"PrInCiPeAlIaBaBuA"};
    request(app)
      .post('/api/dipendenti?test=true')
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