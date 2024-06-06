const ler = require('readline-sync');

let a = ler.questionInt("Digite um número: ");
let rest = a%3;

if (rest == 0) {
    console.log("é multiplo de 3");
} else {
    console.log("não é multiplo de 3");
}