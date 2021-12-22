test('POST piatto', (assert) => {

    request(app).post('/api/piatto/:PiattoID?test=true')
    .send({'menuID' : 1, 'name' : 'porridge', 'prezzo' : 6.75, 'image' : './ui/image/sbocco.png', 'descrizione' : 'fatto dagli inglesi'})
    .expect(200)
    .end((err,res) =>{
        assert.error(err,'no errors')
        assert.pass('passed')
        assert.comment(res.body)
        assert.end()
    })
})