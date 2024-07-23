let al = document.createElement('h2');
al.classList ='testclasse';
let texto = document.createTextNode('Texto a ser inserido');

al.appendChild(texto);
console.log(al);

let title = document.querySelector('#titulo');
console.log(title);

let pai = title.parentNode;
pai.replaceChild(al, title)