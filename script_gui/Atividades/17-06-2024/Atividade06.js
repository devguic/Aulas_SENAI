const ler = require ('readline-sync');

let x = 1;
let quantidade = 0;
let homem = 0;
let mulher = 0;
let hm = 0;
let ml = 0;
while (x != 0) {
    let nome = ler.question("Informe seu nome ou 0 para sair: ");
    if (nome == "0") {
        x = 0;
    } else {
        quantidade++;
        let sexo = ler.question("Qual seu sexo?\n F- feminino       M- masculino\n");
        sexo = sexo.toUpperCase();
        if (sexo == "F" || sexo == "FEMININO") {
            mulher++;
        } else {
            homem++;
        }
    }
}

ml = (mulher/quantidade) * 100;
hm = (homem/quantidade) *100;
console.log("Há", ml + "% mulheres");
console.log("Há", hm + "% homens");