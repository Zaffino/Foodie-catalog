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
test('GET menu', (assert) => {
    request(app)
        .get('/api/menu')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            var expectedRes = 
            {
              "menu": [
                  {
                      "menuID": 0,
                      "menuType": "take away",
                      "menuList": [
                          {
                              "piattoID": 0,
                              "name": "vellutata misteriosa",
                              "prezzo": 10.50,
                              "image": "../images/logo.png",
                              "descrizione": "vellutata della mensa, gg ez sei avvelenato"
                          },
                          {
                              "piattoID": 1,
                              "name": "pizza con ananas",
                              "prezzo": 10.50,
                              "image": "../images/logo.png",
                              "descrizione": "non ancora riconosciuta ufficialmente come pizza"
                          }
                      ]
                  },
                  {
                      "menuID": 1,
                      "menuType": "table",
                      "menuList": [
                          {
                              "piattoID": 0,
                              "name": "vellutata misteriosa",
                              "prezzo": 10.50,
                              "image": "../images/logo.png",
                              "descrizione": "vellutata della mensa, gg ez sei avvelenato"
                          },
                          {
                              "piattoID": 1,
                              "name": "pasta al sugo di sputo dello chef",
                              "prezzo": 10.50,
                              "image": "../images/logo.png",
                              "descrizione": "5 stelle sammontana"
                          },
                          {
                              "piattoID": 2,
                              "name": "pizza",
                              "prezzo": 10.50,
                              "image": "../images/logo.png",
                              "descrizione": "no, non è una pizza bianca"
                          },
                          {
                              "piattoID": 3,
                              "name": "fenicottero",
                              "prezzo": 10.50,
                              "image": "../images/logo.png",
                              "descrizione": "l'unico piatto rosa a nostra disposizione. Servito freddo."
                          }
                      ]
                  }
              ]
          }
  
            assert.error(err, 'No error');
            assert.same(res.body, expectedRes, 'res.body as expected');
            assert.end();
        });
        
  });
  