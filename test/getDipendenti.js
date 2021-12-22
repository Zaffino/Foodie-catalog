test('GET dipendenti', (assert) => {
    request(app)
        .get('/api/dipendenti?test=true&name=zebra%20a%20strisce%20nere&password=hashpass2')
        .expect(200)
        .end((err, res) => {
            
            assert.error(err, 'No error');
            assert.same(res.text, '1', 'res.text as expected' )
            
            assert.end();
        });
        
  });