const ler = require('readline-sync');


function validar() {
    
    let letra = ler.question("Digite uma letra: ").toLowerCase();

    eVogal(letra);
}


function eVogal(letra) {

    if (letra =="a") {
        console.log("é vogal!");
    } else if (letra =="e") {
        console.log("é vogal!");
    }else if (letra =="i") {
        console.log("é vogal!");
    }else if (letra =="o") {
        console.log("é vogal!");
    } else if (letra =="u") {
        console.log("é vogal!");
    }else {
    console.log("É consoante!");
    } 
}

validar();