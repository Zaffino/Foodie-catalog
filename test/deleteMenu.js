test('DELETE menu', (assert) => {
  var DELmenuID = {'menuID' : 1};
  request(app).delete('/api/menu/:MenuID?test=true')
  .send(DELmenuID)
  .expect(200)
  .end((err, res) => {

      

      
      assert.error(err, 'no error')
      assert.end()
  })
})