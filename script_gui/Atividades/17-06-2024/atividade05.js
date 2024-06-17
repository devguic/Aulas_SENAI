const ler = require('readline-sync');

let x = 0;
let quantidade = 0;
let soma = 0;
let y = 0;
while (y != -1) {
    let num = ler.questionFloat("Digite um número para calcular a média ou -1 para sair: ");

    if (num != -1) {
        soma = soma + num;
        quantidade++;
    } else{
        y = -1;
    }
}
x = soma/quantidade;
x = x.toFixed(2);

console.log("A média dos números digitados é: ", x);