const ler = require('readline-sync');

let playlist = [];

let x = 0;
let duracaototal = 0;
let duracaosec = 0;

while (x != -1) {
    
    let musica = ler.question("Informe o nome da música: ");
    let tempomin = ler.questionInt("Informe os minutos da música: ");
    let temposec = ler.questionInt("Informe os segundos: ");

    playlist.push({nome: musica, duracaomin: tempomin, duracaosec: temposec});
    let escolha = ler.questionInt("Deseja continuar adicionando?\n1-SIM\n2-NÃO\n");
    if (escolha == 2) {
        x = -1;
    } 

    
}

for (let music of playlist) {
    
    duracaototal += music.duracaomin;
    duracaosec += music.duracaosec;

    console.log(`A música ${music.nome} tem ${music.duracaomin} minutos e ${music.duracaosec} segundos de duração`);
}

let restomin = duracaosec/60;

let minutosinsec = parseInt(restomin);

duracaosec = restomin - minutosinsec;

let segundos = duracaosec * 60;

duracaototal += minutosinsec;

console.log(`A duração total da playlist é de ${duracaototal} minutos e ${segundos} segundos`);
