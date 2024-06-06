const ler = require('readline-sync');

let nome1 = ler.question("Informe o nome do primeiro time: ");
let nome2 = ler.question("Informe o nome do segundo  time: ");
let gols1 = ler.questionInt("Informe o número de gols do primeiro time: ");
let gols2 = ler.questionInt("Informe o número de gols do segundo time: ");

if (gols1>gols2) {
console.log("O", nome1,"ganhou do", nome2, "de", gols1, "a", gols2);
}else if(gols2 > gols1){
    console.log("O", nome2,"ganhou do", nome1, "de", gols2, "a", gols1);
}else {
console.log("Empate\nO ", nome1,"empatou com",nome2,"com o placar de", gols1,"a",gols2);
}