const ler = require('readline-sync');

let x = 1;
let elementos = [];

while (x<=5) {
    
    let elemento = ler.question("Informe um elemento: ");
    elementos.push(elemento);
    x++;
}
console.log(`O array tem ${elementos.length} elementos`);