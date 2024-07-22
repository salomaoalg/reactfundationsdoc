let elementos = document.querySelectorAll('#lista2 li');
let texto;
for (let i = 0; i < elementos.length; i++){
    texto = elementos[i].textContent;
    console.log(texto);
}

//let elementox = document.querySelectorAll('#lista li');
//console.log(elementox);

let selecao = document.querySelector('#paragrafo').textContent;
console.log(selecao);