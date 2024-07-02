const ler = require('readline-sync');

let filmes = [];
let x = 1;
let y = 0;

while (true) {
    
    let nome = ler.question("Informe o nome dos filmes em cartaz e -1 para sair: ");
    if (nome == -1) {
        break;
    } else {
        
        let nota = 0;

        filmes.push({nome: nome, nota: nota});
    }
}
let melhoresfilmes = [];

while (y != -1) {

    x = 1;
    console.clear();
    console.log("---------- Avaliando Filmes -----------");
    let escolha =ler.questionInt("1- Avaliar os filmes\n2- Exibir lista de classificação\n3- SAIR\n");
    
    switch (escolha) {
        case 1:
            for (let filme of filmes) {
                console.log(`Filme ${x} => ${filme.nome}`);
                x++;
            }

            let escolha2 = ler.questionInt("Qual filme deseja avaliar?\n");
            x=1;
            for (let filme of filmes) {
                if (x == escolha2){

                    let avaliacao = ler.questionFloat("Informe a nota de 0 a 10: ");

                    filme.nota = avaliacao;
                    break;
                }
                x++;
            }

            break;
        
        case 2: 
            
            
            melhoresfilmes = filmes.sort((x, y) => y.nota - x.nota);
            console.table(melhoresfilmes);

            let eee = ler.question("Pressione qualquer tecla para continuar\n");


            break;
        case 3: 
            
            let escolhasair = ler.questionInt("Deseja realmente sair?\n1-Sim\n2-Não\n=> ");

            if (escolhasair == 1) {
                
                y = -1;
            }
            break;
    
        default:
            console.log("Opção inválida!!\n");
            let aa = ler.question("Pressione qualquer tecla para continuar\n")
            break;
    }

    
    
}

console.clear();

console.log("---------Melhores Filmes--------");

melhoresfilmes = filmes.sort((x, y) => y.nota - x.nota);
console.table(melhoresfilmes);