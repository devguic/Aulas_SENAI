const ler = require('readline-sync');


function calcularVar() {
    let vendas = ler.questionInt("Informe as vendas: ");
    variaveis(vendas);

}

function variaveis(vendas) {
    if (vendas < 200) {
        let soma = vendas * 5
        soma= soma.toFixed(2);
        console.log("Pagar: R$",soma);
    } else if (vendas < 450) {
        let soma = vendas * 7.5
        soma= soma.toFixed(2);
        console.log("Pagar: R$",soma);
    }else {
        let soma = vendas * 10
        soma= soma.toFixed(2);
        console.log("Pagar: R$",soma);
    }
}

calcularVar();
