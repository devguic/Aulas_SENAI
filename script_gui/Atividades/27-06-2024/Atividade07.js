const ler = require('readline-sync');

let cinema = new Array(4).fill(null).map(() => new Array(4).fill("disponivel"))
console.table(cinema);
let x = 0;

while (x != -1) {
    
    console.log("----Sistema de compras de ingresso--------");
    console.log("1- Comprar Ingresso\n2- Exbir assentos\n3 -sair");
    let escolha = ler.questionInt();

    switch (escolha) {
        case 1:
            
            let fileira = ler.questionInt("informe o número da fileira: ");
            let numero = ler.question("Informe o número do assento: ");

            if (cinema[fileira][numero] == "disponivel") {
                
                console.log(`Fileira ${fileira}, assento ${numero} reservado!\nTenha uma excelente experiência`);

                cinema[fileira][numero] = "reservado";
                let sair1 = ler.question("Tecle 1 para continuar: ");
            } else {
                
                console.log("Assento já está reservado, escolha outro:");
                console.table(cinema);
                let sair2 = ler.question("Tecle 1 para continuar: ");
            }
            console.clear();
            break;
        case 2:

            console.log("Exibindo os assentos:");
            console.clear();
            console.table(cinema);
            let sair = ler.question("Tecle 1 para continuar: ");
            break;
        case 3:

            console.log("Desligando o cinema: ");
            console.clear();
            let off = ler.questionInt("Deseja realmente sair?\n1-Sim\n2-Nao\n");
            if (off == 1) {
               x = -1; 
            } 
            console.clear();
            break;
    
        default:
            console.log("Opcao Inválida!");
            break;
    }

}

console.log("Como a sala está:");
console.table(cinema);