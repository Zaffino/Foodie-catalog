var Express = require("express");
var app = Express();

const swaggerJsDoc = require ('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0' ,
        info: {
            title: "Foodie Catalog API",
            version: "0.1.0",
            description: "API dell'applicativo Foodie Catalog",
            contact: {
                name:"G09",
                url: 'http://localhost:49146/',
            },
        },
        servers: [
            {
                url: 'http://localhost:49146/',
                description: 'Server di test in locale',
            },
        ],
        
    },
    apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



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
/**
 * @swagger
 * /api/menu:
 *  get:
 *      summary: Estrazione di tutti i menu
 *      description: Estrazione di una lista di menu dal file menu.json sul server in locale 
 *      responses:
 *          200:
 *              description: Una lista di menu
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          menuID:
 *                                              type: integer
 *                                              description: Il numero identificativo del menu
 *                                              example: 1
 *                                          menuType:
 *                                              type: string
 *                                              description: La tipologia di menu, scelta tra "table" e "take away"
 *                                              example: "take away"
 *                                          menuList:
 *                                              type: object Array
 *                                              description: La lista dei piatti contenuti nel menu
 *                                              example :  [{
 *			"piattoID": 0,
 *			"name": "vellutata misteriosa",
 *			"prezzo": 10.5,
 *			"image": "../images/logo.png",
 *			"descrizione": "vellutata della mensa, gg ez sei avvelenato"
 *		}, {
 *			"piattoID": 1,
 *			"name": "pizza con ananas",
 *			"prezzo": 10.5,
 *			"image": "../images/logo.png",
 *			"descrizione": "non ancora riconosciuta ufficialmente come pizza"
 *		}]
 */
app.get('/api/menu', (request, response) => {

    console.log('API GET MENU');
    var pathMenu = 'menu.json';

    if(request.query.test == 'true'){
        pathMenu = './api/menu.json';
    }

    var data = fs.readFileSync(pathMenu); //era necessario specificare la cartella del file json
    
    var myObject = JSON.parse(data);
    response.send(myObject);
    

    
});

// API di POST per aggiungere un elemento al menu.json
/** 
 * @swagger
 * /api/menu/:MenuID:
 *  post:
 *      summary: Creazione di un nuovo menu
 *      description: Creazione di un nuovo oggetto dello stesso formato di quelli presenti in menu.json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          menuType:
 *                              type: string
 *                              description: La tipologia di menu, scelta tra "table" e "take away"
 *                              example: "take away"
 *                          menuList:
 *                              type: object Array
 *                              description: La lista dei piatti contenuti nel menu
 *                              example : [{"piattoID": 0,"name": "vellutata misteriosa","prezzo": 10.50,"image": "../images/logo.png","descrizione": "vellutata della mensa, gg ez sei avvelenato"}]
 *      responses:
 *          200:
 *              description: 'elemento aggiunto'
 *
*/
app.post('/api/menu/:MenuID', (request,response)=>{
    console.log('API POST MENU');

    var pathMenu = 'menu.json';

    if(request.query.test == 'true'){
        pathMenu = './api/menu.json';
    }

    var data = fs.readFileSync(pathMenu); //era necessario specificare la cartella del file json
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
    fs.writeFile(pathMenu, newData, err => {
        if (err) throw err; 
    });
    //'Menu aggiunto correttamente con ID:'+ (maxID+1) +' new lenght: ('+ myObject.menu.lenght + ')'
    response.json('elemento aggiunto');
});

// API di POST per aggiungere un piatto ad un menu in menu.json
/** 
 * @swagger
 * /api/piatto/:PiattoID:
 *  post:
 *      summary: Aggiunta di un piatto
 *      description: Aggiunta di un piatto ad un menu preesistente all'interno di menu.json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          menuID:
 *                              type: integer
 *                              description: Il numero identificativo del menu
 *                              example: 1
 *                          name:
 *                              type: string
 *                              description: Il nome del piatto
 *                              example: zuppa di tartaruga
 *                          price:
 *                              type: float
 *                              description: Il prezzo del piatto, espresso in euro
 *                              example: 10,45
 *                          image:
 *                              type: string
 *                              description: Il path assoluto per accedere all'immagine del piatto
 *                              example: ./ui/image/logo.png
 *                          descrizione:
 *                              type: string
 *                              description: La descrizione dettagliata del piatto
 *                              example: Nessun animale diverso da una tartaruga dalle guancie rosse è stata maltrattata durante la produzione di questo programma
 *      responses:
 *          200:
 *              description: 'elemento aggiunto'
 *
*/
app.post('/api/piatto/:PiattoID', (request, response) =>{
    console.log('API POST PIATTO');

    var pathMenu = 'menu.json';

    if(request.query.test == 'true'){
        pathMenu = './api/menu.json';
    }

    var data = fs.readFileSync(pathMenu); //era necessario specificare la cartella del file json
    var myObject = JSON.parse(data);

    var maxID=-1;

    var requestID = request.body['menuID'];
    
    for(let[i,menu] of myObject.menu.entries()){
        if(myObject.menu[i].menuID == requestID){
            for(let[j,piatto] in myObject.menu[i].menuList){
                
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
    
    

    myObject.menu[requestID].menuList.push(newPiatto);
    console.log(JSON.stringify(myObject))
    var newData = JSON.stringify(myObject);
    fs.writeFile(pathMenu, newData, err => {
        if (err) throw err; 
    });

    response.json('elemento aggiunto');

})

// API di DELETE per togliere un elemento dal menu.json

/**
 * @swagger
 * /api/menu/:MenuID:
 *  delete:
 *      summary: Eliminazione di un menu.
 *      description: Eliminazione di un menu dal file menu.json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          menuID:
 *                              type: integer
 *                              description: Il numero identificativo del menu
 *                              example: 1
 *      responses:
 *          200:
 *              description: Eliminazione effettuata
 */

app.delete('/api/menu/:MenuID', (request, response) => {
    console.log('API DELETE MENU');

    var pathMenu = 'menu.json';

    if(request.query.test == 'true'){
        pathMenu = './api/menu.json';
    }

    var data = fs.readFileSync(pathMenu); //era necessario specificare la cartella del file json
    var myObject = JSON.parse(data);

    toCheckID = request.body['menuID'];

    for(let[i,menu] of myObject.menu.entries()){
        if(myObject.menu[i].menuID == toCheckID){
            myObject.menu.splice(i,1);
        }
    }

    var newData = JSON.stringify(myObject);
    fs.writeFile(pathMenu, newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata'); 
});

//API di DELETE per togliere un piatto da un menu

/**
 * @swagger
 * /api/piatto/:PiattoID:
 *  delete:
 *      summary: Eliminazione di un piatto.
 *      description: Eliminazione di un piatto, da uno specifico menu in menu.json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          menuID:
 *                              type: integer
 *                              description: Il numero identificativo del menu
 *                              example: 1
 *                          piattoID:
 *                              type: integer
 *                              description: Il numero identificativo di un piatto all'interno di un menu
 *                              example: 3
 *      responses:
 *          200:
 *              description: Eliminazione effettuata
 */

app.delete('/api/piatto/:PiattoID', (request,response) => {
    console.log('API DELETE PIATTO');

    var pathMenu = 'menu.json';

    if(request.query.test == 'true'){
        pathMenu = './api/menu.json';
    }

    var data = fs.readFileSync(pathMenu); //era necessario specificare la cartella del file json
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
    var newData = JSON.stringify(myObject);
    fs.writeFile(pathMenu, newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata'); 
})

// API per il dipendenti.json

// API di GET per la conferma del dipendente

/**
 * @swagger
 * /api/dipendenti:
 *  get:
 *      summary: Estrazione un dipendente
 *      description: Estrazione di un dipendente dal file dipendenti.json dati username e password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Il nome del dipendente.
 *                              example: Mariangingiangiongiangingiongiangiola
 *                          password:
 *                              type: string
 *                              description: La password del dipendente.
 *                              example: QwErTy<3TaRaNtInO
 *      responses:
 *          200:
 *              description: 
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              ID:
 *                                  type: integer
 *                                  description: Il numero identificativo del dipendente
 *                                  example: 3
 */

app.get('/api/dipendenti', (request, response) => {
    console.log('API GET DIPENDENTI');

    var pathWorkers = 'dipendenti.json';

    if(request.query.test == 'true'){
        pathWorkers = './api/dipendenti.json';
    }

    var data = fs.readFileSync(pathWorkers); //era necessario specificare la cartella del file json
    var myObject = JSON.parse(data);

    var myResponse = -1;

    var requestName = request.body['name'];
    var requestPassword = request.body['password'];

    for(let[i,dipendente] of myObject.workers.entries()){
        if((dipendente.name == requestName)&&(dipendente.password == requestPassword)){
            myResponse = dipendente.ID;
        }
    }

    response.send(myResponse);
});

// API di POST per l'aggiunta di un dipendente

/** 
@swagger
 * /api/dipendenti:
 *  post:
 *      summary: Aggiunta di un dipendente
 *      description: Aggiunta di un dipendente al dipendenti.json
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Il nome del dipendente
 *                              example: Arrotino
 *                          password:
 *                              type: string
 *                              description: La password del dipendente
 *                              example: TrEnTa2TrEnTin1
 *      responses:
 *          200:
 *              description: 'elemento aggiunto'
 */

app.post('/api/dipendenti',(request,response)=>{
    console.log('API POST DIPENTENTI');

    var pathWorkers = 'dipendenti.json';

    if(request.query.test == 'true'){
        pathWorkers = './api/dipendenti.json';
    }

    var data = fs.readFileSync(pathWorkers); //era necessario specificare la cartella del file json
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
    fs.writeFile(pathWorkers, newData, err => {
        if (err) throw err; 
    });

    response.json('elemento aggiunto');
});

// API di DELETE per rimuovere un dipendente

/**
 * @swagger
 * /api/dipendenti:
 *  delete:
 *      summary: Eliminazione di un dipendente .
 *      description: Eliminazione di un dipendente dal dipendenti.json (anche noto come licenziamento)
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          ID:
 *                              type: integer
 *                              description: Il numero identificativo del dipendente
 *                              example: 1
 *      responses:
 *          200:
 *              description: Eliminazione effettuata
 */

app.delete('/api/dipendenti',(request, response) => {
    console.log('API DELETE WORKERS');

    var pathWorkers = 'dipendenti.json';

    if(request.query.test == 'true'){
        pathWorkers = './api/dipendenti.json';
    }

    var data = fs.readFileSync(pathMenu); //era necessario specificare la cartella del file json
    var myObject = JSON.parse(data);

    var requestID = request.body['ID'];

    for(let[i,dipendente] of myObject.workers.entries()){
        if(myObject.workers[i].ID == requestID){
            myObject.workers.splice(i,1);
        }
    }
    var newData = JSON.stringify(myObject);
    fs.writeFile(pathWorkers, newData, err => {
        if (err) throw err; 
    });

    response.json('Eliminazione effetuata');
})





module.exports = app;
