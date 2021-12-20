var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json } = require('express/lib/response');

/*
test('POST piatto' , (assert) => {
    //var postJSONpiatto = 'errore ez'; //dovrebbe dare errore
    request(app).post('/api/piatto/:PiattoID')
    .expect('Content-Type', /json/).expect(200)
    //.send(postJSONpiatto)
    .end((err, res) => {

        
        assert.error(err, 'no error')

        //assert.comment(res.body)
        assert.end()
    })
});
*/




test('POST piatto', (assert) => {

    request(app).post('/api/piatto/:PiattoID')
    .send({'menuID' : 1, 'name' : 'porridge', 'prezzo' : 6.75, 'image' : './ui/image/sbocco.png', 'descrizione' : 'fatto dagli inglesi'})
    .expect(200)
    .end((err,res) =>{
        assert.error(err,'no errors')
        assert.end()
    })
})


/*

//da capire il delete
test('DELETE piatto', (assert) => {
    //var DELmenuID = '1';
    request(app).delete('/api/menu/piatto/:PiattoID')
    //.send(DELmenuID)
    .expect(200)
    .end((err, res) => {

        

        
        assert.error(err, 'no error')
        assert.end()
    })
})

*/