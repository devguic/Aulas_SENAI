const ler = require('readline-sync');

let array = [];

let x = 1;
let y = 0;
let resto = 0;
let pares = 0;

while (x <= 10) {
    
    let add = ler.questionInt("Digite um valor: ");
    array.push(add);
    x++;
}

while (y <= array.length) {
    
    resto = array[y]%2;
    if (resto == 0) {
        pares++;
    }
    y++;
}

console.log("O array possui", pares, "valores pares");