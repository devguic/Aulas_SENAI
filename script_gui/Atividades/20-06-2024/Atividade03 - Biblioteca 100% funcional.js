const ler = require('readline-sync');

let livros = [];
let cat = [];
let variaveis = {};
let x = 0;
let y = 0;
let roda = 0;

while (true) {
    let nome = ler.question("Informe o nome do livro ou 0 para sair: ").toLowerCase();
    if (nome === '0') {
        break;
    } else {
        let categoria = ler.question("Informe a categoria do livro: ").toLowerCase();
        livros.push({ livro: nome, categoria: categoria });

        if (!cat.includes(categoria)) {
            cat.push(categoria);
        }
        
        roda++;
    }
}

console.log("------------ Categorias -----------");
console.log(cat);
console.log("Quantidade de livros cadastrados:", roda);

let escolha = parseInt(ler.question("Informe quantos deseja estudar: "), 10);
let objeto_estudo = livros.slice(0, escolha);
console.table(objeto_estudo);

while (y < cat.length) {
    let categoria = cat[y];
    let varName = 'variavel' + (y + 1);
    variaveis[varName] = objeto_estudo.filter(c => c.categoria === categoria);
    if (variaveis[varName].length == 0) {
        
    } else {
        console.log(`No estudo, na categoria ${categoria} tem ${variaveis[varName].length} livros`);
    }
   y++;
}
console.table(variaveis);
