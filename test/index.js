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


test('GET dipendenti', (assert) => {
    request(app)
        .get('/api/dipendenti')
        //.expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            
            assert.error(err, 'No error');
            //assert.same(res.body, expectedRes, 'res.body as expected');
            assert.end();
        });
        
  });


/*

test('DELETE dipendenti', (assert) => {

    request(app).delete('/api/menu/:MenuID')
    .send({'MenuID' : 0})
    .expect(200)
    .end((err,res) =>{
        assert.error(err,'no errors')
        assert.end()
    })
})

  */








/*



//da capire il delete
test('DELETE menu', (assert) => {
    var DELmenuID = '1';
    request(app).delete('/api/menu/:MenuID')
    .send(DELmenuID)
    .expect(200)
    .end((err, res) => {

        

        
        assert.error(err, 'no error')
        assert.end()
    })
})



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