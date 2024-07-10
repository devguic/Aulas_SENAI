const ler = require('readline-sync');

let frase = ler.question("Informe a frase que deseja contar os caracteres: ");

let contaCaractere = (frase) => console.log(`A frase digitada tem ${frase.length} caracteres`);

console.log(contaCaractere(frase));