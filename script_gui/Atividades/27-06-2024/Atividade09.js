const ler = require('readline-sync');

let jogadores =[];
while (true) {
    
    let nome = ler.question("Informe o nome do jogador ou -1 para sair: ");
    if (nome == -1) {
        
        break;
    } else {
        let pontos = ler.question("Informe quantos pontos o jogador fez: ");
        jogadores.push({nome: nome, pontos: pontos});
    }
}

jogadores = jogadores.sort((x,y) => y.pontos - x.pontos);

console.log("Ranking atualizado:");
for (let ordem of jogadores) {
    
    console.log(ordem);
}