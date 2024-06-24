const ler = require('readline-sync');

let chamadas = [{}];
let x = 0;

while (x != -1) {
    
    let numero = ler.questionInt("Informe o número da ligação ou digite 0 para sair: ");

    if (numero == 0) {
        x = -1;
    } else {
        let tipo = ler.question("Indique o tipo da chamada: ").toLowerCase();
        chamadas.push({numero: numero, tipo: tipo})
    }
}

let filtro_tipo = chamadas.filter(incend => incend.tipo === "incendio");

console.clear();

console.log("------- Chamadas de alta prioridade ------------");
console.table(filtro_tipo);