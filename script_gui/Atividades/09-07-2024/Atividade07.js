let nomes = [
    {nome: "Ana", idade: 12},
    {nome: "Bruno", idade: 25},
    {nome: "Carla", idade: 30},
    {nome: "Daniel", idade: 15},
    {nome: "Eduarda", idade: 24},
    {nome: "Felipe", idade: 17},
    {nome: "Gabriela", idade: 23},
    {nome: "Henrique", idade: 19},
    {nome: "Isabela", idade: 29},
    {nome: "João", idade: 16}
];

let maiorIdade = [];

let verificaIdade = nome =>{
    if (nome.idade >= 18) {
        let nome1 = "";
        let nomemaiusculo = "";
        nome1 = nome.nome;
        nomemaiusculo = nome1.toUpperCase();
        maiorIdade.push({nome: nomemaiusculo, idade: nome.idade});
        
    } 
};


nomes.forEach(verificaIdade);

console.table(maiorIdade);