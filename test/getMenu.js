var test = require('tape');
var request = require('supertest');
var app = require('../api');
const { json, send } = require('express/lib/response');

// test GET API per prendere il menu
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

          //let jsonRes = res.body
          //console.log(JSON.stringify(res.body))
          assert.error(err, 'No error');
          assert.same(res.body, expectedRes, 'res.body as expected');
          assert.end();
      });
      
});