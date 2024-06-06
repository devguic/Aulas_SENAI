const ler = require('readline-sync');

let a = ler.questionInt("Informe um número: ");

if ((a%2) == 0) {
    console.log("é divisível por 2");
}
if ((a%5) == 0) {
    console.log("é divisível por 5");
}
if ((a%10) == 0) {
    console.log("é divisível por 10");
}