const ler = require('readline-sync');

let x =1;
let caro = 0;
let barato = 10000;
let nc = "";
let nb = "";

function validarDados() {
    
    while (x <=15) {
        let nome = ler.question("Informe o nome do produto: ");
        let valor = ler.questionFloat("Informe o valor do produto: R$");
        comparar(nome, valor);
        x++;

}
console.clear();
exibirProdutos(nc, caro, nb, barato);
}

function comparar (nome, valor) {

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
    
}}

function exibirProdutos(nc,caro,nb,barato) {
console.log("O produto mais caro é o", nc, "com o preço de R$" + caro);
console.log("O produto mais barato é o", nb, "com o preço de R$" + barato);
    
}

validarDados();