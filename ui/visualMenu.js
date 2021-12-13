/*function fun() {
  var menu = document.getElementById("menu") //scegli dove verrà inserito il nodo (elemento) food
  //menu è l'id di un <div>
  console.log("hi") //solo per vedere se funziona
  var food = document.createElement("p");   // Crea un elemento di tipo <p>
  food.setAttribute("style", "color : blue;");
  food.append("ciao") //aggiungo il testo
  menu.append(food) //aggiungi food al documento html, il particolare dentro il <div> menu 
}

function gotoConfirmOrdine(params) {
  window.location.pathname = '/ui/confirmOrdine.html'
}*/

require ('api/menuClass.js');

const page = document.getElementById('root');
page.style = "text-align:center";

const title = document.createElement('div');
const testoTitolo = document.createElement('h1');
testoTitolo.textContent = "Foodie Catalog";
title.appendChild(testoTitolo);


const table = document.createElement('table');

var request = new XMLHttpRequest;
request.open('GET', 'http://localhost:8080/api/menuClass.js', true);
request.onload = function (){

  var data = this.response;
  console.log(data);
  if (request.status >= 200 && request.status < 400){
    //inserire visualizzazione menu
  } ;
} else {
    //inserire error handling
}  


}


page.appendChild(title);