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

// API per il menu.json

// GET API per prendere  il menu
app.get('/api/menu', (request, response) => {

    console.log('API GET MENU');
    var data = fs.readFileSync('./api/menu.json'); //era necessario specificare la cartella del file json
    
    var myObject = JSON.parse(data);
    response.send(myObject);
    

    
});

// API di POST per aggiungere un elemento al menu.json
app.post('/api/menu', (request,response)=>{
    console.log('API POST MENU');

    var data = fs.readFileSync('menu.js');
    var myObject = JSON.parse(data);

    var maxID=-1;

    for(let[i,menu] of myObject.menu.entries()){
        if(menu.MenuID>maxID){
            maxID = menu.MenuID;
        }
    }

    let newMenu = {
        "MenuID": maxID +1,
        "MenuType": request.body['MenuType'],
        "MenuList": request.body['MenuList']
    };

    myObject.menu.push(newMenu);

    var newData = JSON.stringify(myObject);
    fs.writeFile('menu.json', newData, err => {
        if (err) throw err; 
    });

    response.json('Menu aggiunto correttamente con ID:'+ (maxID+1) +' new lenght: ('+ myObject.menu.lenght + ')');
});

// API di DELETE per togliere un elemento dal menu.json
app.delete('/api/menu/:MenuID', (request, response) => {
    console.log('API DELETE MENU');

    var data = fs.readFileSync('menu.js');
    var myObject = JSON.parse(data);

    for(let[i,menu] of myObject.menu.entries()){
        if(menu.MenuID == request.params.MenuID){
            myObject.menu.splice(i,1);
        }
    }
    var newData = JSON.stringify(myObject);
    fs.writeFile('menu.json', newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata: ('+ myObject.menu.lenght + ')');
});

app.delete('/api/menu/:PiattoID', (request,response) => {
    console.log('API DELETE PIATTO');

    var data = fs.readFileSync('menu.js');
    var myObject = JSON.parse(data);

    for(let[i,menu] of myObject.menu.entries()){
        if(menu.MenuID == request.params.MenuID){
            for(let[j,piatto] of myObject.menu.MenuList.entries()){
                if(piatto.PiattoID == request.params.PiattoID){
                    myObject.menu[i].MenuList.splice(j,1);
                }
            }
        }
    }
})

// API per il dipendenti.json

// API di GET per la conferma del dipendente
app.get('/api/dipendenti', (request, response) => {
    console.log('API GET DIPENDENTI');

    var data = fs.readFileSync('dipendenti.json');
    var myObject = JSON.parse(data);

    var myResponse = -1;

    for(let[i,dipendente] of myObject.workers.entries()){
        if((dipendente.name == request.params.name)&&(dipendente.password == request.params.password)){
            myResponse = dipendente.ID;
        }
    }

    response.send(myResponse);
});

// API di POST per l'aggiunta di un dipendente
app.post('/api/dipendenti',(request,response)=>{
    console.log('API POST DIPENTENTI');

    var data = fs.readFileSync('dipendenti.json');
    var myObject = JSON.parse(data);

    var maxID=-1;

    for(let[i,dipendente] of myObject.workers.entries()){
        if(dipendente.ID>maxID){
            maxID = dipendente.MenuID;
        }
    }

    let newWorker = {
        "ID": maxID +1,
        "name": request.body['name'],
        "password": request.body['password']
    };

    myObject.menu.push(newWorker);

    var newData = JSON.stringify(myObject);
    fs.writeFile('menu.json', newData, err => {
        if (err) throw err; 
    });
});

// API di DELETE per rimuovere un dipendente

app.delete('/api/dipendenti',(request, response) => {
    console.log('API DELETE WORKERS');

    var data = fs.readFileSync('dipendenti.js');
    var myObject = JSON.parse(data);

    for(let[i,dipendente] of myObject.dipendenti.entries()){
        if(dipendente.ID == request.params.ID){
            myObject.workers.splice(i,1);
        }
    }
    var newData = JSON.stringify(myObject);
    fs.writeFile('dipendenti.json', newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata: ('+ myObject.workers.lenght + ')');
})

module.exports = app;
