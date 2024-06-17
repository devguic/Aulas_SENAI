const ler = require('readline-sync');

let fatorial = 1;
let x =1;
let engrenagem = ler.questionInt("Digite quantos números devem ser lidos: ");
while (x<=engrenagem) {

    let num = ler.questionInt("Informe um número: ");
    let escolha = num;
    while (escolha!=0) {
        fatorial = fatorial * escolha;
        escolha = escolha-1;
    }
    console.log("O fatorial de", num, "é: ", fatorial);
    fatorial = 1;
    num = 0;
    escolha = 0;
    x++;
}