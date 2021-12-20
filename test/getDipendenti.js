test('GET dipendenti', (assert) => {
  request(app)
      .get('/api/dipendenti')
      .send({"name": "zebra a strisce nere", "password": "hashpass2"})
      .expect(200)
      .end((err, res) => {
          
          assert.error(err, 'No error');
          assert.same(res.text, '1', 'res.text as expected' )
          
          assert.end();
      });
      
});