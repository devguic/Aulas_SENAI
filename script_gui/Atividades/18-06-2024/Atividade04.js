const ler = require('readline-sync');

let x = 1;
let elementos = [];
let y = 0;
let quantidade = 0;

while (x <= 5) {
    
    let elemento = ler.question("Informe um elemento: ").toLowerCase();
    elementos.push(elemento);
    x++;
}
console.clear();
let procura = ler.question("Qual elemento deseja procurar?\n").toLowerCase();

while (y <= elementos.length) {
    
    if (procura == elementos[y]) {
        quantidade++;
    }
    y++;
}
console.log(`O elemento ${procura} aparece ${quantidade} vezes`);