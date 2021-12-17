const app = document.getElementById('root');


const container = document.createElement('div');
container.setAttribute('class', 'container');



const title = document.createElement('div');
const testoTitolo = document.createElement('h1');
testoTitolo.textContent = "Foodie Catalog";
title.appendChild(testoTitolo);


var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:49146/api/menu', true);
request.onload = function () {


    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.menu.forEach(menuItem => {
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

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `THE API IS NOT WORKING!`;
        app.appendChild(errorMessage);
    }
}

request.send();

app.appendChild(title);
app.appendChild(container);






