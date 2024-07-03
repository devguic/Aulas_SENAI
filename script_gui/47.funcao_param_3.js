// Trabalhando com funções no Javascript - Utilizando dois ou mais parâmetros

// Sistema de Conversão de Moedas


const ler = require('readline-sync');

(async() =>{
const {default: cor} = await import ('chalk');


    const DOLAR = 5.50, EURO = 6.05, LIBRA = 7.12, IENE = 0.033;

    function dolar(valor) {
        result = valor / DOLAR;
        return new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD' }).format(result);
    }
    function euro(valor) { 
        result = valor / EURO;
        return new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR' }).format(result);
    }
    function libra(valor) { 
        result = valor / LIBRA;
        return new Intl.NumberFormat('en-GB', {
            style: 'currency', currency: 'GBP' }).format(result);
    }
    function iene(valor) { 
        result = valor / IENE;
        return new Intl.NumberFormat('ja-JP', {
            style: 'currency', currency: 'JPY' }).format(result);
    }

    function converterMoeda(valor, moeda) {
        
        switch (moeda) {
            case 1:
                console.log(cor.green(`O valor informado convertido para dólar é: ${dolar(valor)}`));
                break;

            case 2:
                console.log(cor.red(`O valor informado convertido para euro é: ${euro(valor)}`));
                break;

            case 3:
                console.log(cor.cyanBright(`O valor informado convertido para libra é: ${libra(valor)}`));
                break;

            case 4:
                console.log(cor.magenta(`O valor informado convertido para iene é: ${iene(valor)}`));
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
