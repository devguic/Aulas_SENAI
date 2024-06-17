const ler = require('readline-sync');

let soma = 0;
let x = 1;
while (x != 0) {
    let num = ler.questionInt("Informe um número ou 0 para sair: ");

    if (num < 0) {
        soma = soma + num;
    }
    if (num == 0) {
        x = 0;
    }
}
console.log("O somatório dos números negativos é", soma);