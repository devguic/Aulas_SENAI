const ler = require('readline-sync');

let biblioteca = [];

while (true) {
    
    let nome = ler.question("Informe o nome do libro ou -1 para sair: ");
    if (nome == "-1") {
        break;        
    } else {
        let autor = ler.question("Informe o nome do autor: ");
        let ano = ler.question("Informe o ano de publicação: ");
        biblioteca.push({nome: nome, autor: autor, ano: ano});
    }
}

for (let procura of biblioteca) {
    console.log(procura);
}

let escolha = ler.questionInt("Como deseja organizar a lista?\n1-Por nome\n2-Por ano\n");
switch (escolha) {
    case 1:
        
        let bibliotecaordemalfa = biblioteca.sort((a,b) => a.nome.localeCompare(b.nome));

        console.table(bibliotecaordemalfa);

        break;
    case 2:
        
        let biblioteca_anoscres = biblioteca.sort((a,b) => a.ano - b.ano);

        console.table(bibliotecaordemalfa);

        break;

    default:
        break;
}