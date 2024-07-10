const ler = require('readline-sync');

let palavra = ler.question("Informe uma palavra: ");

// palavra.split('').reverse().join('')
let inverterPalavra = (palavra) => palavra.split('').reverse().join('');

let palindromo = (palavra) => {
    let palavraInvertida = inverterPalavra(palavra);
    if (palavra === palavraInvertida) {
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
};

palindromo(palavra);
