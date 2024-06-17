const ler = require('readline-sync');

let x = 0;
let can1 = 0;
let can2 = 0;
let can3 = 0;
let branco = 0;
let nulo = 0;
let votos = 0;

while (x != -1) {
    let voto = ler.question("Eleição\n(1) candidato 1 \n(2) candidato 2\n(3) candidato 3\n(0) voto branco \n(4) nulo\n:");
    if (voto == -1) {
        votos = x;
        x = -1;
    } else if (voto == 1){
        can1++;
        x++;
    } else if (voto == 2){
        can2++;
        x++;
    } else if (voto == 3){
        can3++;
        x++;
    } else if (voto == 4){
        nulo++;
        x++;
    } else if (voto == 0){
        branco++;
        x++;
    } 
    
}
if (can1 > can2) {
    if (can1 > can3) {
        console.log("O candidato 1 ganhou a eleição com ", can1, "votos");
    } else {
        console.log("O candidato 3 ganhou a eleição", can3, "votos");
    }
    
} else {
    if (can2 > can3) {
        console.log("O candiato 2 ganhou a eleição", can2, "votos");
    } else {
        console.log("O candiato 3 ganhou a eleição", can3, "votos");
    }
}
console.log(votos, "pessoas votaram");
console.log(branco, "votos em branco");
console.log(nulo, "votos nulos");
