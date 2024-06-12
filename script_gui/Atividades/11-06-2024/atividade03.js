const ler = require('readline-sync');

let num = ler.questionFloat("Informe um número real: ");

console.log("--------OPÇÕES--------");
console.log("101 - Raiz quadrada\n102 - A metade\n103 - 10% do número\n104 - O dobro");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 101:
        result = math.sqrt(num); 
        console.log("O resultado é: ", result);

        break;
    case 102:
        result = num/2; 
        console.log("O resultado é: ", result);

        break;
    case 103:
        result = num*0.10; 
        console.log("O resultado é: ", result);

        break;
    case 104:
        result = num*2; 
        console.log("O resultado é: ", result);

        break;

    default:
        console.log("Opção Inválida!");
        break;
}