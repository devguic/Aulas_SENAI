const ler = require('readline-sync');

function cadastro() {
let salario = ler.questionFloat("Qual é seu salário? R$");
let prestacao = ler.questionFloat("Qual é o valor das prestações? ");

avaliacaoEmprestimo(salario, prestacao);
}


function avaliacaoEmprestimo(salario, prestacao) {
    if (prestacao > (salario*0.25)) {
        console.log("Empréstimo não concedido");
    }else{
        console.log("Empréstimo concedido");
    } 
}

cadastro();