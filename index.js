var Express = require("express");
var app = Express();

var fs = require('fs');

var cors = require('cors')
app.use(cors())

// module to parse the API body request
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(49146, () => {
    console.log("APIs Running");


});

// GET API per i prodotti
app.get('/api/jsonFiles/menu.json', (request, response) => {
    var data = fs.readFileSync('prodotti.json');
    var myObject = JSON.parse(data);

    response.send(myObject);

})