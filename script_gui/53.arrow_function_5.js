// Utilizando arrow function com IF ternário e Array com Objetos

let usuarios = [
    {nome: "Ana", idade: 14},
    {nome: "Bruno", idade: 25},
    {nome: "Carla", idade: 30},
    {nome: "Daniel", idade: 27},
    {nome: "Eduarda", idade: 24},
    {nome: "Felipe", idade: 16},
    {nome: "Gabriela", idade: 23},
    {nome: "Henrique", idade: 15},
    {nome: "Isabela", idade: 17},
    {nome: "João", idade: 13}
];


let verificaIdade = usuario => {
    console.log(`O ${usuario.nome} tem ${usuario.idade} anos e é ${usuario.idade >= 18 ? "Maior" : "Menor"} de idade`);
}

// verificaIdade(usuarios[3]);
// for (let i = 0; i < usuarios.length; i++) {
//     verificaIdade(usuarios[i]);
    
// }

usuarios.forEach(verificaIdade);