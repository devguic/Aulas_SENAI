const ler = require('readline-sync');

let vendas = ler.question("Quantas vendas o funcionário fez? ");
const meta = 10000;

if (vendas >= Number(meta)) {
    console.log("Gnahou!");
} else {
    console.log("Não Ganhou!");
}