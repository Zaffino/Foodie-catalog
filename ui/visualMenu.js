function fun() {
  var menu = document.getElementById("menu") //scegli dove verrà inserito il nodo (elemento) food
  //menu è l'id di un <div>
  console.log("hi") //solo per vedere se funziona
  var food = document.createElement("p");   // Crea un elemento di tipo <p>
  food.append("ciao") //aggiungo il testo
  menu.append(food) //aggiungi food al documento html, il particolare dentro il <div> menu 
}

