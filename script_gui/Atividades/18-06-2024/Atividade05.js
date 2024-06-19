const ler = require('readline-sync');

let pessoa = {
    nome: "",
    idade: 0
};

let chama = ler.question("Informe seu nome: ");
pessoa.nome = chama;

let age = ler.question("Informe sua idade: ");
pessoa.idade = age;

console.log(pessoa);