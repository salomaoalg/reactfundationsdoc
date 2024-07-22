let el = document.createElement('div');
el.classList = 'divcriada'
console.log(el);

let container = document.querySelector('#container');
container.appendChild(el); // INSERINDO ELEMENTO FILHO COM CLASSE

let el2 = document.createElement('div');
el2.classList = 'divbefore'
let el3 = document.querySelector('#container .divbefore')
console.log(el3);

container.insertBefore(el2, el3);