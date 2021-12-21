
var numeroPiatti = 3;
var tipoMenu = "take away"

function changeType(){
  if(tipoMenu == "take away")
    tipoMenu = "tavolo"
  else tipoMenu = "take away"

  console.log('tipo = ' + tipoMenu)

  document.getElementById('buttonType').innerText = tipoMenu


}


function add(params) {
  const mainDiv = document.getElementById('root');
  const card = document.createElement('div')
  card.setAttribute('id','div_'+ numeroPiatti)

  const nameTextfield = document.createElement('input')
  nameTextfield.setAttribute('id', 'name_'+ numeroPiatti)
  const priceTextfield = document.createElement('input')
  priceTextfield.setAttribute('id', 'price_'+ numeroPiatti)
  const description = document.createElement('textarea')
  description.setAttribute('id', 'description_' + numeroPiatti)
  description.setAttribute('rows', '5')

  const immagine = document.createElement('input')
  immagine.setAttribute('type','file')
  immagine.setAttribute('id','image_' + numeroPiatti)

  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('onclick', 'rimuovi('+ numeroPiatti +')')
  deleteButton.innerText = "rimuovi"

  card.innerHTML += "nome: "
  card.appendChild(nameTextfield)
  card.innerHTML += " prezzo: "
  card.appendChild(priceTextfield)
  card.innerHTML += "<br>descrizione: "
  card.appendChild(description)
  card.innerHTML += " immagine: "
  card.appendChild(immagine)
  card.innerHTML += "<br>"
  card.appendChild(deleteButton)

  
  mainDiv.appendChild(card)
  numeroPiatti++;
}


function rimuovi(id) {
  const card = document.getElementById('div_'+ id);
  card.remove();
}

function prova(params) {

  jsonReq ='{\n"menuType" : "' + tipoMenu +'",\n';
  jsonReq += '"menuList" : [\n';

  let i = 0;
  const root = document.getElementById('root')
  for (const key in root.children) {
    //console.log(root.children[key]);
    let idValue;



    try {
      idValue = root.children[key].getAttribute('id');
      idValue = idValue.substring(4, idValue.length);
      idValue = parseInt(idValue)
      console.log(idValue)

      if(i!=0){
        jsonReq += ",\n";
      }
      jsonReq += '{"id" : ' + i + ','; 
      jsonReq += '"name": "'+ document.getElementById("name_" + idValue).value + '",';
      jsonReq += '"price": '+ document.getElementById("price_" + idValue).value + ',';
      jsonReq += '"description": "'+ document.getElementById("description_" + idValue).value + '"}';

      
      i++;
      //console.log(root.children[key].getAttribute('id'))
    } catch (error) {
      console.log('nada')
      //console.log(error)
    }

    
    


  }

  jsonReq += '\n]\n}' 

  jsonReq = JSON.parse(jsonReq)

  console.log(jsonReq)
  //console.log(JSON.parse(jsonReq))



}

function postMenu(){
  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:49146/api/menu/:MenuID', true);
  request.setRequestHeader('Content-Type', 'application/json');
    jsonReq ='{\n"menuType" : "' + tipoMenu +'",\n';
    jsonReq += '"menuList" : [\n';

    let i = 0;
    const root = document.getElementById('root')
    for (const key in root.children) {
      
      //console.log(root.children[key]);
      let idValue;
      try {
        idValue = root.children[key].getAttribute('id');
        idValue = idValue.substring(4, idValue.length);
        idValue = parseInt(idValue)
        console.log(idValue)

        if(i!=0)  jsonReq += ",\n";
        
        jsonReq += '{"id" : ' + i + ','; 
        jsonReq += '"name": "'+ document.getElementById("name_" + idValue).value + '",';
        jsonReq += '"price": '+ document.getElementById("price_" + idValue).value + ',';
        jsonReq += '"description": "'+ document.getElementById("description_" + idValue).value + '"}';
      
        i++;
        //console.log(root.children[key].getAttribute('id'))
      } catch (error){
        console.log('error')
      } 

    }

    jsonReq += '\n]\n}' 
    
    request.send(jsonReq)
    
    //jsonReq = JSON.parse(jsonReq)
    console.log(jsonReq)
   
    
}
