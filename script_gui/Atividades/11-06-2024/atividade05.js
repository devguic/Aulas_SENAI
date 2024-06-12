const ler = require ('readline-sync');

let dia = ler.questionInt("Informe o dia: ");
let estacoes = ler.questionInt("Informe o mês: ");
let ano = ler.questionInt("Informe o ano: ");
console.log("Data: "+dia+"/"+estacoes+"/"+ano);
let confirma = ler.questionInt("Está correto?\n1. SIM         2. NÃO\n : ");


if (confirma == 1) {
    console.clear();
    switch (estacoes) {
        case 1:
        case 01: 
            console.log("A estação correspondente ao mês de Janeiro é o verão");
            break;
        case 2:
        case 02: 
                console.log("A estação correspondente ao mês de Fevereiro é o verão");
                break;
        case 3:
        case 03: 
                console.log("A estação correspondente ao mês de Março é o verão");
                break;
        case 4:
        case 04: 
                console.log("A estação correspondente ao mês de Abril é o outono");
                break;
        case 5:
        case 05: 
            console.log("A estação correspondente ao mês de Maio é o outono");
            break;
        case 6:
        case 06: 
                console.log("A estação correspondente ao mês de Junho é o outono");
                 break;
        case 7:
        case 07: 
                console.log("A estação correspondente ao mês de Julho é o inverno");
                break;
        case 8:
        case 08: 
                console.log("A estação correspondente ao mês de Agosto é inverno");
                break;
        case 9:
        case 09: 
            console.log("A estação correspondente ao mês de Setembro é o inverno");
            break;
        case 10:
        case 010: 
                console.log("A estação correspondente ao mês de Outubro é a primavera");
                 break;
        case 11:
        case 011: 
                console.log("A estação correspondente ao mês de Novembro é a primavera");
                break;
        case 12:
        case 012: 
                console.log("A estação correspondente ao mês de Dezembro é a primavera");
                break;
        default:
            console.log("Mês inválido!");
            break;
    }
    
} else {
    console.log("Escreva a data novamente");
}

