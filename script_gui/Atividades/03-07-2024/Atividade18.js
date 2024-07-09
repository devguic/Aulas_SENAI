const ler = require('readline-sync');

let soma = 0;
let x = 1;

function validarDados() {
    while (x != 0) {
        let num = ler.questionInt("Informe um número ou 0 para sair: ");
        if (num == 0) {
            x = 0;
        } else if (num < 0) {
            somar(num);
        }
        
    
}
exibirDados();
}

function somar(num) {
    return soma = soma + num;
}

function exibirDados() {
    
    console.log("O somatório dos números negativos é", soma);
}

validarDados();