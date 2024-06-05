//Blocos de Variáveis locais e Globais

let num1 = 100; // Variável global
{
    let num2 = 30;
    console.log(num1);
    console.log(num2);

    {
        console.log(num2);
    }
}

console.log(num1);
//console.log(num2);