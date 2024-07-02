const ler = require('readline-sync');

let numeros = [];
let pares = [];
let impares = [];

let x = 1;
while (x<=10) {
    
    let numero = ler.questionInt("Informe um número: ");
    numeros.push(numero);
    x++;
}

let resto = 0;
for (let number of numeros) {
    
    resto = number%2;

    if (resto ==0) {
        
        pares.push(number);
    } else {
        impares.push(number);
    }
}
console.log(`Há os seguintes números pares:\n ${pares}`);

console.log("----------------------------------------");

console.log(`Há os seguintes números ímpares:\n ${impares}`);