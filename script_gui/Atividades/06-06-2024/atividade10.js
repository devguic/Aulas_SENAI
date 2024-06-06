const ler = require('readline-sync');

let salario = ler.questionFloat("Qual é seu salário? R$");
let prestacao = ler.questionFloat("Qual é o valor das prestações? ");

if (prestacao > (salario*0.25)) {
    console.log("Empréstimo não concedido");
}else{
    console.log("Empréstimo concedido");
}