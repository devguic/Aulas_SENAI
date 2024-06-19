const ler = require('readline-sync');

let x = 1;
let nomes = [];

while (x <= 10) {
    
    let nome = ler.question("Insira um nome na lista: ").toLowerCase();
    nomes.push(nome);
    x++;
}
let procura = ler.question("Insira o nome que deseja procurar na lista: ").toLowerCase();

let posicao = nomes.indexOf(procura);
if (posicao >= 0) {
    console.log(`Achei! O nome ${procura} está na posição ${posicao} no array`);
} else {
    console.log(`Não Achei!`);
}