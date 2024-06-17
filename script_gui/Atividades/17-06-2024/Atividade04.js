const ler = require('readline-sync');

let x = 1;
let bh = 0;
let fora = 0;

while (x<=20) {
    let nome = ler.question("Digite seu nome: ");
    let cidade = ler.question("Digite sua cidade natal: ");
    cidade = cidade.toUpperCase();
    if (cidade == "BH" || cidade == "BELO HORIZONTE") {
    bh++;
    } else {
    fora++;
    }   

    x++;
}
console.log("Há", bh, "pessoas de BH");
console.log("Há", fora, "pessoas de fora de BH");