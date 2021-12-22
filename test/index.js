var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json } = require('express/lib/response');

// WATCH OUT -> quando viene eseguito un test assicurarsi di aggiungere ?test=true al url
// Quando si vuole far partire un test bisogna o scommentare il test che si vuole eseguire oppure aggiungere a questo file il test che si vuole eseguire.
// Per praticità d'uso si usi 1 test alla volta.

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