//acessando por TAG
let titulo = document.getElementsByTagName('h1')[0];
console.log(titulo);

//acessando por TAG
let lista = document.getElementsByTagName('li');
console.log(lista);


//acessando por ID
var paragrafo = document.getElementById('paragrafo').innerText;
alert(paragrafo);

//acessando por CLASSE
let itemlista = document.getElementsByClassName('lista')[1].innerHTML;
console.log(itemlista);