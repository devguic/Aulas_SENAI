const ler = require('readline-sync');

let pessoa = {
    nome: "",
    idade: 0
};

let chama = ler.question("Informe seu nome: ");
let age = ler.question("Informe sua idade: ");

pessoa.nome = chama;
pessoa.idade = age;

console.log(`O seu nome é ${pessoa.nome}`);