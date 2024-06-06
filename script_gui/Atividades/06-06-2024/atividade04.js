const ler = require('readline-sync');
let num = ler.question("Digite um número: ")
let resto = Number(num)%2;

if (resto == 0) {
    let soma = Number(num) + 8
    console.log("O resultado é",soma);
}else{
    let soma = Number(num)+10
    console.log("O resultado é",soma);
}