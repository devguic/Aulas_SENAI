const ler = require('readline-sync');

function validarDados() {

    let km = ler.question("Informe a velocidade em km/h: ");
    conversao(km);
    console.log(`${km} Km/h equivale à ${conversao(km)} M/s`);

    
}

function conversao(km) {
    
    return km/3.6;
}

validarDados();
