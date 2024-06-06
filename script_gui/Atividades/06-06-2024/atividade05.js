const ler = require('readline-sync');

let a = ler.question("Digite um valor: ");
let b = ler.question("Digite um valor: ");
let c = ler.question("Digite um valor: ");

if (Number(a) > Number(b) > Number(c)) {
    console.log("A ordem decrescente é",a,b,c);
} else if (Number(a)>Number(c)>Number(b)) {
    console.log("A ordem decrescente é",a,c,b);
} else if (Number(b)>Number(a)>Number(c)) {
    console.log("A ordem decrescente é",b,a,c);
}else if (Number(b)>Number(c)>Number(a)) {
    console.log("A ordem decrescente é",b,c,a);
} else if (Number(c)<Number(b)<Number(a)){
    console.log("A ordem decrescente é",c,b,a);
}else if (Number(c)<Number(a)<Number(b)) {
    console.log("A ordem decrescente é",c,a,b);
}
