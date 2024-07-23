//ADICIONANDO ATRIBUTO
let title = document.querySelector('#title');
title.setAttribute('class', 'testando_atributo');
console.log(title);

let btn = document.querySelector('#btn');
btn.setAttribute("disabled", "disabled");
let subtitle = document.querySelector('.subtitle');
subtitle.setAttribute('id', 'title-2');

//REMOVENDO ATRIBUTO
let lista = document.querySelector('#lista');
lista.removeAttribute('id'); 