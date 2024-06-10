const ler = require('readline-sync');

let a = ler.question("Digite um valor: ");
let b = ler.question("Digite um valor: ");
let c = ler.question("Digite um valor: ");

if (Number(a) > Number(b)) {
    if (Number(b) > Number(c)) {
        console.log("A ordem decrescente é: ", a,b,c);
    } else if (Number (a) > Number (c)){
        console.log("A ordem decrescente é: ", a,c,b);
    } else {
        console.log("A ordem decrescente é: ", c,a,b);
    }
} else if (Number(b) > Number (a)) {
    if (Number(a) > Number(c)){
        console.log("A ordem decrescente é: ", b,a,c);
    } else if (Number (b) > Number (c)){
        console.log("A ordem decrescente é: ", b,c,a);
    } else {
        console.log("A ordem decrescente é: ", c,b,a);
    }
}