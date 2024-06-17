const ler = require('readline-sync');

let x = 1;
let soma = 0;
while (x <=18) {
    let num = ler.questionInt("Informe um número: ");
    soma = soma + num;

    x++;
}
if (soma > 500) {
    soma = soma -100;
    console.log("A soma - 100 é:", soma);
} else {
    console.log("A soma é:", soma);
}