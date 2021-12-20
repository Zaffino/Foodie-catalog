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
app.post('/api/menu/:MenuID', (request,response)=>{
    console.log('API POST MENU');

    var data = fs.readFileSync('./api/menu.json');
    var myObject = JSON.parse(data);

    var maxID=-1;

    for(let[i,menu] of myObject.menu.entries()){
        if(myObject.menu[i].menuID>maxID){
            maxID = myObject.menu[i].menuID;
        }
    }

    let newMenu = {
        "menuID": maxID +1,
        "menuType": request.body['menuType'],
        "menuList": request.body['menuList']
    };

    myObject.menu.push(newMenu);

    var newData = JSON.stringify(myObject);
    fs.writeFile('./api/menu.json', newData, err => {
        if (err) throw err; 
    });
    //'Menu aggiunto correttamente con ID:'+ (maxID+1) +' new lenght: ('+ myObject.menu.lenght + ')'
    response.json('elemento aggiunto');
});

// API di POST per aggiungere un piatto ad un menu in menu.json
app.post('/api/piatto/:PiattoID', (request, response) =>{
    console.log('API POST PIATTO');

    var data = fs.readFileSync('./api/menu.json');
    var myObject = JSON.parse(data);

    var maxID=-1;

    var requestID = request.body['menuID'];

    for(let[i,menu] of myObject.menu.entries()){
        if(myObject.menu[i].menuID == requestID){
            for(let[j,piatto] in myObject.menu[i].menuList.entries()){
                if(maxID < myObject.menu[i].menuList[j].piattoID){
                    maxID = myObject.menu[i].menuList[j].piattoID;
                }
            }
        }
    }

    let newPiatto = {
        "piattoID": maxID +1,
        "name": request.body['name'],
        "prezzo": request.body['prezzo'],
        "image": request.body['image'],
        "descrizione": request.body['descrizione']
    };
    
    myObject.menu.push(newPiatto);

    var newData = JSON.stringify(myObject);
    fs.writeFile('menu.json', newData, err => {
        if (err) throw err; 
    });

    response.json('Menu aggiunto correttamente con ID:'+ (maxID+1) +' new lenght: ('+ myObject.menu.lenght + ')');

})

// API di DELETE per togliere un elemento dal menu.json
app.delete('/api/menu/:MenuID', (request, response) => {
    console.log('API DELETE MENU');

    var data = fs.readFileSync('./api/menu.json');
    var myObject = JSON.parse(data);

    toCheckID = request.body['menuID'];

    for(let[i,menu] of myObject.menu.entries()){
        if(myObject.menu[i].menuID == toCheckID){
            myObject.menu.splice(i,1);
        }
    }

    var newData = JSON.stringify(myObject);
    fs.writeFile('./api/menu.json', newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata: ()'); 
});

app.delete('/api/piatto/:PiattoID', (request,response) => {
    console.log('API DELETE PIATTO');

    var data = fs.readFileSync('./api/menu.json');
    var myObject = JSON.parse(data);

    var menuRequest = request.body['menuID']; 
    var piattoRequest = request.bosy['piattoID'];

    for(let[i,menu] of myObject.menu.entries()){
        if(myObject.menu[i].menuID == menuRequest){
            for(let[j,piatto] in myObject.menu[i].menuList.entries()){
                if(myObject.menu[i].menuList[j].piattoID == piattoRequest){
                    myObject.menu[i].menuList.splice(j,1);
                }
            }
        }
    }
})

// API per il dipendenti.json

// API di GET per la conferma del dipendente
app.get('/api/dipendenti', (request, response) => {
    console.log('API GET DIPENDENTI');

    var data = fs.readFileSync('./api/dipendenti.json');
    var myObject = JSON.parse(data);

    var myResponse = -1;

    var requestName = request.body['name'];
    var requestPassword = request.body['password'];

    for(let[i,dipendente] of myObject.workers.entries()){
        if((dipendente.name == requestName)&&(dipendente.password == requestPassword)){
            myResponse = dipendente.ID;
        }
    }

    response.send(myResponse.toString());
});

// API di POST per l'aggiunta di un dipendente
app.post('/api/dipendenti',(request,response)=>{
    console.log('API POST DIPENTENTI');

    var data = fs.readFileSync('./api/dipendenti.json');
    var myObject = JSON.parse(data);

    var maxID=-1;

    for(let[i,dipendente] of myObject.workers.entries()){
        if(myObject.workers[i].ID>maxID){
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

    var data = fs.readFileSync('./api/dipendenti.json');
    var myObject = JSON.parse(data);

    var requestID = request.body['ID'];

    for(let[i,dipendente] of myObject.workers.entries()){
        if(myObject.workers[i].ID == requestID){
            myObject.workers.splice(i,1);
        }
    }
    var newData = JSON.stringify(myObject);
    fs.writeFile('dipendenti.json', newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata: ('+ myObject.workers.lenght + ')');
})



const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Foodie Catalog API",
            contact: {
                name:"G09"
            },
            servers: ["http://localhost:49146/"]
        }
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
