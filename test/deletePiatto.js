test('DELETE piatto', (assert) => {
    var DELpiattoID = {'menuID' : 1, "piattoID": 4};
    request(app).delete('/api/menu/:MenuID?test=true')
    .send(DELpiattoID)
    .expect(200)
    .end((err, res) => {
  
        
  
        
        assert.error(err, 'no error')
        assert.end()
    })
  })
