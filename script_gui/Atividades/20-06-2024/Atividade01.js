const ler = require('readline-sync');

let x = 0;
let produtos = [{}];

while (x != -1) {
  
    let produto = ler.question("Informe o nome do produto ou digite 'sair' para sair: ").toLowerCase();
    if (produto === "sair") {
        x = -1;
    } else {
        let quantidade = ler.question ("Informe a quantidadedele no estoque: ");
        produtos.push({nome: produto, quantidade: quantidade});
    }



    
}

let quantidade_def0 = produtos.filter(quanti1 => quanti1.quantidade > 0);
produtos.sort();

console.log("------------ Os produtos em estoque ---------------");
console.table(quantidade_def0);