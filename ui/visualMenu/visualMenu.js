const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');



const title = document.createElement('div');
const testoTitolo = document.createElement('h1');
testoTitolo.textContent = "Foodie Catalog";
title.appendChild(testoTitolo);

const buttonContainer = document.createElement('div');
buttonContainer.setAttribute('class','buttonContainer');

var menuChoiche = 'take away';

function selectMenu(selectedMenu){
    menuChoiche = selectedMenu;
    displayMenu();
}

const buttonTable = document.createElement('button');
buttonTable.setAttribute('onClick', 'selectMenu("table")');
buttonTable.innerText='Tavolo';

const buttonTakeAway = document.createElement('button');
buttonTakeAway.setAttribute('onClick', 'selectMenu("take away")');
buttonTakeAway.innerText='Take Away';

buttonContainer.appendChild(buttonTable);
buttonContainer.appendChild(buttonTakeAway);

displayMenu();

function displayMenu(){

    container.innerHTML='';

    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:49146/api/menu', true);
    request.onload = function () {
    var numMenu=0;

    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.menu.forEach(menuItem => {
            if(menuItem.menuType == menuChoiche){
                numMenu+=1;
                const card = document.createElement('div');
                card.setAttribute('class', 'card');


                const h1 = document.createElement('h1');
                h1.textContent = menuItem.menuType;

                const divPiatti = document.createElement('div');

                menuItem.menuList.forEach(piatto => {
                    const cardPiatto = document.createElement('div');
                    cardPiatto.setAttribute('class', 'card');

                    const PiattoName = document.createElement('h2');
                    PiattoName.textContent = `${piatto.name}`

                    const imgPiatto = document.createElement('img');
                    imgPiatto.src = `${piatto.image}`;
                    cardPiatto.appendChild(imgPiatto);

                    const PiattoPrezzo = document.createElement('h3');
                    PiattoPrezzo.textContent = `${piatto.prezzo}` + '\u20AC';

                    const PiattoDescrizione = document.createElement('p');
                    PiattoDescrizione.textContent = `${piatto.descrizione}`;


                    cardPiatto.appendChild(PiattoName);
                    cardPiatto.appendChild(PiattoPrezzo);
                    cardPiatto.appendChild(PiattoDescrizione);
                    divPiatti.appendChild(cardPiatto);

            })

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(divPiatti);
            }

        },
        );
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `THE API IS NOT WORKING!`;
        app.appendChild(errorMessage);
    }
    if(numMenu>1){
        alert('Too many Menu.')
        // Messaggio di errore per quando ci sono troppi menu. In una situazione di applicativo di una azienda x in sviluppo presso una
        //seconda azienda y si potrebbe considerare di trasformare questo problema in una feature (menù modulari)
    }
    
}

request.send();

}

app.appendChild(title);
app.appendChild(buttonContainer);
app.appendChild(container);






