const ler = require('readline-sync');

let peso = ler.questionFloat("Qual seu peso em KG? ");
let altura = ler.questionFloat("Qual sua altura em metros (m)? ");

let imc = peso/(altura^2);

if (imc <= 18.5) {
    console.log("Abaixo do peso, IMC:",imc);
    
}else if (imc <= 25){
    console.log("Peso normal, IMC:",imc);
}else if (imc < 30){
    console.log("Acima do peso, IMC:",imc);
}else if (imc >= 30){
    console.log("Obeso, IMC:",imc);
}