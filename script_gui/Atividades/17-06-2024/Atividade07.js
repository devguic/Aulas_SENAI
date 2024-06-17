const ler = require('readline-sync');

let x =1;
let caro = 0;
let barato = 10000;
let nc = "";
let nb = "";
while (x <=15) {
    let nome = ler.question("Informe o nome do produto: ");
    let valor = ler.questionFloat("Informe o valor do produto: R$");

    if (valor > caro && valor < barato) {
        caro = valor;
        barato = valor;
        nb = nome;
        nc = nome;
    } else if (valor > caro) {
        caro = valor;
        nc = nome
    } else if ( valor < barato){
        barato = valor;
        nb = nome;
    }
x ++;
}
console.log("O produto mais caro é o", nc, "com o preço de R$" + caro);
console.log("O produto mais barato é o", nb, "com o preço de R$" + barato);