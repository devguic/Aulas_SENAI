const ler = require('readline-sync');
let x = 1;
let soma = 0;
let resto = 1;
let media = 0;
let qnt = 0;

function validarDados() {
    
    while (x != 0) {
        let num = ler.questionInt("Informe um número ou 0 para sair: ");
        if (num == 0) {
            x = 0;
        } else if (par(num) == 0) {
            qnt++;
            somar(num);
        }

}
medias();
exibir();
}

function par(num) {
    
    return resto = num%2;
}

function somar(num) {
    return soma += num
}

function medias() {
    
    return media = soma/qnt;
}

function exibir() {
    
    console.log("A media dos números pares é:", media);
}

validarDados();