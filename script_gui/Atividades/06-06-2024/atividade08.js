const ler = require('readline-sync');

let a = ler.questionInt("Digite um número: ");
let b = ler.questionInt("Digite outro número: ");

let soma = a+b;

if (soma >20) {
    let resultado = soma + 8;
    console.log(resultado);
    
} else {
    let resultado = soma - 5;
    console.log(resultado);
}