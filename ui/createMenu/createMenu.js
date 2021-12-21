
var numeroPiatti = 3;

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

  let jsonReq;
  const root = document.getElementById('root')
  for (const key in root.children) {
    console.log(root.children[key]);
    for (const field in key.children) {
      console.log(key.children[field])
    }
  }
}

function postMenu(){
  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:49146/api/menu/:MenuID', true);
  request.onload(() => {
    for (const key in document.getElementById('root')) { //??????
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
      }

    }
  }) 

}
