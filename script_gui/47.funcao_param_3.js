// Trabalhando com funções no Javascript - Utilizando dois ou mais parâmetros

// Sistema de Conversão de Moedas


const ler = require('readline-sync');

(async() =>{
const {default: cor} = await import ('chalk');


    const DOLAR = 5.50, EURO = 6.05, LIBRA = 7.12, IENE = 0.033;

    function dolar(valor) { return valor / DOLAR;}
    function euro(valor) { return valor / EURO;}
    function libra(valor) { return valor / LIBRA;}
    function iene(valor) { return valor / IENE;}

    function converterMoeda(valor, moeda) {
        
        switch (moeda) {
            case 1:
                console.log(cor.green(`O valor informado convertido para dólar é: $${dolar(valor).toFixed(2)}`));
                break;

            case 2:
                console.log(cor.red(`O valor informado convertido para euro é: ${euro(valor).toFixed(2)}`));
                break;

            case 3:
                console.log(cor.cyanBright(`O valor informado convertido para libra é: ${libra(valor).toFixed(2)}`));
                break;

            case 4:
                console.log(cor.magenta(`O valor informado convertido para iene é: ${iene(valor).toFixed(2)}`));
                break;
        
            default:
                console.log(cor.yellow("Opção Inválida!"));
                break;
        }
    }

function menu() {

    let valor = ler.questionFloat(cor.bgBlackBright("Informe o valor em reais para ser convertido: R$"));
    console.log(cor.green("-------------- MENU de Conversão --------------"));
    console.log("-- Selecione qual moeda deseja realizar a conversão --");
    console.log(cor.cyan('1. DÓLAR ------------'));
    console.log(cor.cyan('2. EURO ------------'));
    console.log(cor.cyan('3. LIBRA ------------'));
    console.log(cor.cyan('4. IENE ------------'));
    
    let moeda = ler.questionInt("=> ");
    converterMoeda(valor,moeda);
}
let x = 0;

while (x != -1) {
    
    menu();

    let escolha = ler.question("Deseja sair\n1- SIM   2- NÃO\n=> ");
    if (escolha == 1) {
        x=-1;
        break;
    }
}


})();
