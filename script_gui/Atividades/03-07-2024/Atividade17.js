const ler = require('readline-sync');

let fatorial = 1;
let x =1;
let engrenagem = ler.questionInt("Digite quantos números devem ser lidos: ");


function validarDados(){

    while (x <= engrenagem) {
        let num = ler.questionInt("Informe um número: ");
        fatoriar(num);
        exibirDados(num, fatorial);
        fatorial = 1;
        num = 0;
        escolha = 0;
        x++;
        
    }
}


function fatoriar(num) {
    
    let escolha = num;
    while (escolha!=0) {
        fatorial = fatorial * escolha;
        escolha = escolha-1;
    }
}

function exibirDados(num, fatorial) {

    console.log("O fatorial de", num, "é: ", fatorial);
    
}

validarDados();