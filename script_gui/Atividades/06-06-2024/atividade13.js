const ler = require('readline-sync');

console.log("-------------------");
console.log("Tabela de descontos");
console.log("Álcool Até 25 litros, desconto de 2% por litro\nAcima de 25 litros, desconto de 4% por litro\nGasolina Até 25 litros, desconto de 3% por litro\nAcima de 25 litros, desconto de 5% por litro");

let tipo = ler.question("Qual é o combustível?\n Gasolina (G)     Álcool(A)  :");
let litros = ler.questionInt("Quantos liros deseja? ");
const gasosa = 5.86;
const alcool = 4.7;


if (tipo=="A"&& litros <25) {
    let soma = litros * alcool - ((litros*alcool)*0.02)
    soma = soma.toFixed(2);
    console.log("O valor com desconto é R$",soma);
} else if (tipo =="A" && litros > 25) {
    let soma = litros * alcool - ((litros*alcool)*0.04)
    soma = soma.toFixed(2);
    console.log("O valor com desconto é R$",soma);
} else if (tipo =="G" && litros < 25){
    let soma = litros * gasosa - ((litros*gasosa)*0.03)
    soma = soma.toFixed(2);
    console.log("O valor com desconto é R$",soma);
}else {
    let soma = litros * gasosa - ((litros*gasosa)*0.05)
    soma = soma.toFixed(2);
    console.log("O valor com desconto é R$",soma);
}