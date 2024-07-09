const ler = require('readline-sync');


function dia() {
    let a = ler.questionInt("Insira um número entre 1 e 7: ");

    diadasemana(a);
}

function diadasemana(a) {
    

switch (a) {
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
         break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;  
    case 1:
        console.log("Domingo");
        break;
   
    
    
    default:
        console.log("Número inválido, não existe dia da semana com esse número");
        break;
}}
dia();