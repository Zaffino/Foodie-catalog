
class Menu {
    constructor(id, type, list){
        this.id = id;
        this.type = type;
        this.piatti = list ;
    }
    getType (){
        return this.type; 
    }
    getPiatti (){
        return this.piatti;
    }
}

class MenuModificabile extends Menu {
    constructor(id, type){
        this.id = id; // identificativo del menu
        this.type = type; // tipo del menu, dovrebbe variare tra "take away" e "tavolo"
        this.piatti = []; // lista degli elementi della classe Piatto che appartengono al menu
    }
    addPiatto (piatto){
        this.piatti.push() = piatto;
    }
    removePiatto (index){
        this.piatti.splice(index,index);
    }
    modifyPiatto (index, piatto){
        this.piatti[index] = piatto;
    }
}

// implementazione conversioni da json a oggetti della classe



var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*app.listen(49146, () => {
  console.log("APIs Running");


});*/ // da capire prima di inserire

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