const ler = require('readline-sync');


function paragrafoParaArray(paragrafo) {
    return paragrafo.split(/\s+/);
}

// Exemplo de uso:
let paragrafo = "Este é um exemplo de parágrafo que será transformado em um array de palavras.";
let palavrasArray = paragrafoParaArray(paragrafo.toLowerCase());


let procura = ler.question("Informe a palavra que deseja procurar: ");
let repete = 0;

let saberRepeticao = (procura) => { for (let palavra of palavrasArray) {
    
    if (palavra == procura) {
        repete++;
    }
}
console.log(`A palavra ${procura} aparece no parágrafo ${repete} vezes`);};

saberRepeticao(procura);

