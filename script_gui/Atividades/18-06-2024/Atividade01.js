
const ler = require('readline-sync');
let numeros = [];

let menor = -1000;
let x = 1;
let y = 1;

while (x <= 5) {
    
    let numero = ler.questionInt("Digite um número: ");
    numeros.push(numero);
    x++;
}


while (y <= numeros.length) {
    
    if (numeros[y] > menor) {
        menor = numeros[y];
    } 

    y++;
}

console.log("O maior número é o:", menor);