const ler = require('readline-sync');

function numero() {
    let a = ler.questionInt("Informe um número: ");
    divisores(a);
}


function divisores(a) {
    if ((a%2) == 0) {
        console.log("é divisível por 2");
    }
    if ((a%5) == 0) {
        console.log("é divisível por 5");
    }
    if ((a%10) == 0) {
        console.log("é divisível por 10");
    }
}

numero();