var newoaragrafo = document.createElement('p'); // CRIANDO TAG
var texto = document.createTextNode('this is my history'); // CRIANDO TEXTO
newoaragrafo.appendChild(texto); // ADICIONANDO TEXTO DENTRO DA TAG

var body = document.querySelector('body'); // SELECIONANDO O BODY
body.appendChild(newoaragrafo); // ADICIONANDO O P COM TEXTO DENTRO DO BODY