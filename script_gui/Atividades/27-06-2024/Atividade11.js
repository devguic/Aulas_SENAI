const ler = require('readline-sync');

// Criação da matriz 5x6 vazia

let alfabeto = [];
for (let i = 0; i < 5; i++) {
    alfabeto[i] = [];
    for (let j = 0; j < 6; j++) {
        alfabeto[i][j] = '_';
    }
}

// Lista de letras do alfabeto
let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Preenchimento manual da matriz
let index = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 6; j++) {
        if (index < letras.length) {
            alfabeto[i][j] = letras[index];
            index++;
        }
    }
}

// Impressão da matriz
for (let i = 0; i < 5; i++) {
    console.log(alfabeto[i].join(' '));
}

alfabeto[4][3] = ".";
alfabeto[4][4] = "!";
alfabeto[4][5] = "?";


let x = 0;
let mensagem = "";
console.log("Escreva sua mensagem: ");

while (x != -1) {
    
    console.table(alfabeto);
    let linha = ler.question("Informe a linha ou -1 para sair: ");
    if (linha == -1) {
        x == -1;
        break;
    } else {
        let coluna = ler.question("Informe a coluna: ");
        mensagem += alfabeto[linha][coluna];
    }
}
console.clear();
console.log("A mensagem é:");
console.log(mensagem);


