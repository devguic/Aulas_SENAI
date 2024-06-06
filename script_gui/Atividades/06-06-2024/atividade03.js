const ler = require('readline-sync');
let a = ler.question("Digite um valor: ");
let b = ler.question("Digite outro valor: ");

if (a==b) {
    let soma = Number(a) + Number(b);
    console.log(soma,"Essa é a soma dos números");
}else{
    let soma = Number(a)*Number(b);
    console.log(soma,"Essa é a multiplicação dos números");
}