let lista = [
    {nome: "Ana", idade: 22},
    {nome: "Bruno", idade: 25},
    {nome: "Carla", idade: 30},
    {nome: "Daniel", idade: 27},
    {nome: "Eduarda", idade: 24},
    {nome: "Felipe", idade: 28},
    {nome: "Gabriela", idade: 23},
    {nome: "Henrique", idade: 26},
    {nome: "Isabela", idade: 29},
    {nome: "João", idade: 21}
];
let idadePar = [];

let verificaPar = nome =>{ 
    nome.idade %2 == 0 ? idadePar.push({nome: nome.nome, idade: nome.idade}) : ""
};

lista.forEach(verificaPar);

console.log(idadePar);