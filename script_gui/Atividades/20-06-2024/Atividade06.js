const ler = require('readline-sync');

let compras=[];

let check = true;

while (check) {
    
    let produto = ler.question("Informe o que precisa ser comprado ou tecle 0 para sair: ").toLowerCase();
    if (produto == 0) {
        
        check=false;
    } else {
        
        compras.push(produto);
    }
}

let comprasordem= compras.sort((a,b) => a.localeCompare(b));
console.clear();
console.log("--------COMPRAS-------");
console.table(comprasordem);