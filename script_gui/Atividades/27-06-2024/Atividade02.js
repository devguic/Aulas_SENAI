let sujeitos = [
    "Um cachorro",
    "Um gato",
    "Um pássaro",
    "Um coelho",
    "Uma vaca",
    "Um cavalo",
    "Um peixe",
    "Uma tartaruga"
];

let verbos = [
    "Comeu",
    "bebeu",
    "pegou",
    "mastigou",
    "pastou",
    "comeu",
    "nadou",
    "mordeu"
];

let objetos = [
    "ração",
    "leite",
    "uma minhoca",
    "cenoura",
    "grama",
    "feno",
    "no aquário",
    "uma folha"
];

const ler = require('readline-sync');

let posicao1 = ler.questionInt("Informe um número entre 1 e 8: ");
let posicao2 = ler.questionInt("Informe outro número entre 1 e 8: ");
let posicao3 = ler.questionInt("Informe mais um número entre 1 e 8: ");

console.log("Frase aleatória:");
console.log(`${sujeitos[posicao1]} ${verbos[posicao2]} ${objetos[posicao3]}`);


