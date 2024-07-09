const ler = require('readline-sync');
const meta = 10000;

function validacao() {
    
    let vendas = ler.question("Quantas vendas o funcionário fez? ");

    verMeta(vendas);
}


function verMeta(vendas) {
    if (vendas >= Number(meta)) {
        console.log("Ganhou!");
    } else {
        console.log("Não Ganhou!");
    } 
}

validacao();