const ler = require('readline-sync');

let x = 1;
let maior = 0;
let menor = 0;
while (x<=10) {
    let num = ler.questionFloat("Informe um número: ");
    if (num > 5) {
        maior++;
    } else if (num < 5){
        menor++;
    }
x++;
}


console.log("Há", maior, "números maiores que 5");
console.log("Há", menor, "números menores que 5");