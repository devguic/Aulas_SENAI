const ler = require('readline-sync');

let num = [];
let x = 1;
let soma = 0;

while (x <= 10) {
    
    let pessoa = ler.questionInt("Informe um número: ");
    num.push(pessoa);
    x++;

}
console.log("------------------- Escolhas ----------------");
let escolha = ler.questionInt("1) Lista na ordem direta\n2) Lista na ordem inversa\n3) Soma total dos valores\n=> ");
if (escolha == 1) {
    num.sort();
    console.log(`A lista em ordem direta é: ${num}`);

} else if (escolha == 2){
    num.reverse();
    console.log(`A lista em ordem inversa é: ${num}`);

} else if (escolha == 3) {
    for (let i = 0; i < num.length; i++) {
        soma = soma + num[i];
        
    }
    console.log("A soma dos números é:", soma);

}