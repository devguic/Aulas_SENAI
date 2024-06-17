const ler = require('readline-sync');

let resto = 0;
let x = 1;
let num = ler.questionInt("Informe um número: ");
while (resto != 1) {
    resto = num%x;
    if (resto == 0) {
        console.log(x, "é divisor de", num);
    }
    x++;
}
