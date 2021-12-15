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



var selected_menu = "Take away";
selected_menu = "Table";

function changeSelected (new_selection){
  selected_menu = new_selection;
  console.log(new_selection);
}

function fun() {
  
  var page = document.getElementById('root');
  page.setAttribute('style' , 'text-align:center');

  const title = document.createElement('div');
  const testoTitolo = document.createElement('h1');
  testoTitolo.textContent = "Foodie Catalog";
  title.appendChild(testoTitolo);


  const selectionMenu = document.createElement('div');
  const buttonTake = document.createElement('button');
  const buttonTable = document.createElement('button');

  buttonTake.setAttribute('onClick', 'changeSelected( "Take away" )');
  buttonTable.setAttribute('onClick', 'changeSelected( "Table" )');

  selectionMenu.appendChild(buttonTake);
  selectionMenu.appendChild(buttonTable);


  const table = document.createElement('table');

  var request = new XMLHttpRequest;
  request.open('GET', 'http://localhost:8080/api/menu.json', true);
  request.onload = function (){

  var data = this.response;
  console.log(data);
  if (request.status >= 200 && request.status < 400){
    for (menu in data){
      console.log(menu);
    }
  } 
  else {
    console.log(" error ");
  } 
  request.send();
}

table.innerText = request.status;


page.appendChild(title);
page.appendChild(selectionMenu);
page.appendChild(table);

  
}


function gotoConfirmOrdine(){
  window.location.pathname = '/ui/confirmOrdine/confirmOrdine.html'
}