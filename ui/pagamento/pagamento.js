function fun() {
    var page = document.getElementById('root');

    page.style = "text-align:center";

    var text = document.createElement('h1');
    text.innerText = 'prova questo';

    page.appendChild(text);
}