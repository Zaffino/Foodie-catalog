test('DELETE dipendente', (assert) => {
    var DELworkerID = {'ID': 1};
    request(app).delete('/api/dipendenti?test=true')
    .send(DELworkerID)
    .expect(200)
    .end((err, res) => {
  
        
  
        
        assert.error(err, 'no error')
        assert.end()
    })
  })