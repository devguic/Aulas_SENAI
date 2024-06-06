const ler = require('readline-sync');

let produto = ler.questionFloat("Qual o valor do produto? R$");
console.log("Qual a forma de pagamento?\n(1) À vista em dinheiro ou cheque, recebe 10% de desconto\n (2) À vista no cartão de crédito, recebe 15% de desconto\n (3) Em duas vezes, preço normal de etiqueta sem juros\n (4) Em duas vezes, preço normal de etiqueta mais juros de 10%");

let forma = ler.questionInt("");

if (forma == 1) {
    let valor = produto - (produto*0.1);
    valor=toFixed(2)
    console.log("O valor com o desconto é de:",valor);
    
} else if (forma == 2) {
    let valor = produto - (produto*0.15);
    valor=toFixed(2)
    console.log("O valor com o desconto é de:",valor);
}else if (forma == 3){
    console.log("O valor é normal de:",produto);

} else if (forma == 4){
    let valor = produto + (produto*0.1);
    valor=toFixed(2)
    console.log("O valor com o juros é de:",valor);
}else {
    console.log("INVÁLIDO!!");
}