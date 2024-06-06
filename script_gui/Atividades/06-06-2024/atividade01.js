const ler = require('readline-sync');
let a = ler.question("Digite um valor: ");
let b = ler.question("Digite outro valor: ");
let c = ler.question("Digite mais um valor: ");

let soma = Number(a) + Number(b);
if ((soma > c)) {
    console.log("A + B é maior que C");
} else {
    console.log("A + B é menor que C");
}