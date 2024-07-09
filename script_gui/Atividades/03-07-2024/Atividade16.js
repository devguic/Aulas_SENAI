const ler = require('readline-sync');

let x = 1;
let soma = 0;

function validarDados() {
    while (x <=18) {
        let num = ler.questionInt("Informe um número: ");
        somar(num);
        x++;
}

comparar(soma);
}

function somar(num) {
    
    return soma += num;
}

function comparar(soma) {
    
    if (soma > 500) {
        soma = soma -100;
        console.log("A soma - 100 é:", soma);
    } else {
        console.log("A soma é:", soma);
    }
}

validarDados();