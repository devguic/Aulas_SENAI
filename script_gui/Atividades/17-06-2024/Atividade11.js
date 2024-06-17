const ler = require('readline-sync');

let x = 1;
let soma = 0;
let resto = 1;
let media = 0;
let qnt = 0;
while (x != 0) {
    let num = ler.questionInt("Informe um número ou 0 para sair: ");
    let resto = num%2;
    if (num == 0) {
        x = 0;
    } else if (resto == 0) {
        qnt++;
        soma = soma+num;
    } else {

    }
}
media = soma/qnt;
console.log("A media dos números pares é:", media);