var useMenu = require('./api/menuClass.js');

// implementazione conversioni da json a oggetti della classe

var Express = require("express");
var app = Express();

var fs = require('fs');

var cors = require('cors')
app.use(cors()) 

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(49146, () => {
  console.log("MenuClass API's are running");


});

app.get('/api/jsonFiles', (request,response)=>{
    var data = fs.readFileSync('menu.json');
    var myObject = JSON.parse(data);

    var myData = [];

    for (var i=0; i<myObject.lenght();i++){
        var temPlate = myObject.menuList;
        var piatti = [];
        for (var j=0; j<temPlate.lenght; j++){
            piatti[j] = Piatto(temPlate[j].piattoID, temPlate[j].name, temPlate[j].prezzo,temPlate[j].image, temPlate[j].description);
        }
        myData[i] = piatti;
    }

    response.send(myData);
})



/*var Express = require("express");
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

})*/