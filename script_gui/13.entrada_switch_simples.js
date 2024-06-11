const ler = require('readline-sync');

console.log("-----------------MENU INICIAL---------------");
console.log("*** Informe o valor do empréstimo ***");
let valor = ler.questionFloat("=> ");

console.clear(); //limpa tela

console.log("---------MENU DE PAGAMENTO---------");
console.log("1. PIX\n2. DÉBITO\n3. CRÉDITO\n4. DINHEIRO");
console.log("-----------------------------------");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 1:
        result = valor += valor*0.15;
        result = result.toFixed(2);
        console.log("PIX acréscimo de 15%");
        console.log("Realizando o pagamento via PIX o valor ficará em: R$", result);

        break;
    case 2:
        result = valor += valor * 0.20;
        result = result.toFixed(2);
        console.log("DÉBITO acréscimo de 20%");
        console.log("Realizando o pagamento via DÉBITO o valor ficará em: R$", result);
        break;
    case 3:
        result = valor += valor*0.30;
        result = result.toFixed(2);
        console.log("CRÉDITO acréscimo de 30%");
        console.log("Realizando o pagamento via CRÉDITO o valor ficará em: R$", result);
        break;
    case 4:
        result = valor += valor*0.10;
        result = result.toFixed(2);
        console.log("DINHEIRO acréscimo de 10%");
        console.log("Realizando o pagamento via DINHEIRO o valor ficará em: R$", result);

        break;

    default:
        console.log("Opção inválida!");
        break;
}