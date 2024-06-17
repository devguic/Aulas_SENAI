const ler = require('readline-sync');
const frase = ler.question("Digite uma frase: ");
const fraseMinuscula = frase.toLowerCase();
let contadorVogais = 0;
let i = 0;
while (i < fraseMinuscula.length) {
    const caractere = fraseMinuscula[i];
  
    if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
        contadorVogais++;
    }
    i++; 
}


console.log(`A frase "${frase}" possui ${contadorVogais} vogais.`);
