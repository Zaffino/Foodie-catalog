const app = document.getElementById('root');

const formContainer = document.createElement('div');
//formContainer.setAttribute('type','form');

const form = document.createElement('form');
//form.setAttribute('class','center');

const labelName = document.createElement('h3');
//labelName.setAttribute('for','UserID');
labelName.innerHTML('Nome Utente');

const inputName = document.createElement('input');
inputName.setAttribute('type','text');
inputName.setAttribute('id','UserID');
inputName.setAttribute('name','UserID');

const labelPassword = document.createElement('h3');
//labelPassword.setAttribute('for','Password');
labelPassword.innerHTML('Password');

const inputPassword = document.createElement('input');
inputPassword.setAttribute('type','password');
inputPassword.setAttribute('id','Password');
inputPassword.setAttribute('name','Password');

formContainer.appendChild(labelName);
formContainer.appendChild(inputName);
formContainer.appendChild(labelPassword);
formContainer.appendChild(inputPassword);

//formContainer.appendChild(form);

app.appendChild(formContainer);

