const ler = require('readline-sync');

let nome = ler.question("Digite seu nome: ");
let sexo = ler.question("Digite seu sexo \n Masculino (M) Feminino (F): ");
let estado = ler.question("Qual é o seu estado civil? \n CASADA (C), DIVORCIADA (D), SOLTEIRA (S):  ");

if ((estado == "C")|| (estado =="casada")  ) {
    let tempo = ler.question("Ha quanto tempo (anos) esta casada? ")
} else {
    
}