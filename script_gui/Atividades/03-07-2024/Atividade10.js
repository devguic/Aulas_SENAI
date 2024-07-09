const ler = require('readline-sync');
let real = 0;

function validarDados() {
    let peso = ler.questionFloat("Qual é o seu peso em kg? ");

    console.log("Qual planeta deseja saber seu peso?\n 1. Mercúrio \n 2. Vênus \n 3. Marte \n 4. Júpiter \n 5. Saturno \n 6. Urano");

    let opt = ler.questionInt("=> ");

    parametros(opt,peso);
    
}

function parametros(opt, peso) {
    
    switch (opt) {
        case 1:
            real = peso * 0.37;
            console.log("Seu peso em Mercúrio é: ",real, "KG");
            break;
        case 2:
            real = peso * 0.88;
            console.log("Seu peso em Vênus é: ",real, "KG");
            break;
        case 3:
            real = peso * 0.38;
            console.log("Seu peso em Marte é: ",real, "KG");
            break;
        case 4:
            real = peso * 2.64;
            console.log("Seu peso em Júpiter é: ",real, "KG");
            break;
        case 5:
            real = peso * 1.15;
            console.log("Seu peso em Saturno é: ",real, "KG");
            break;
        case 6:
            real = peso * 1.17;
            console.log("Seu peso em Urano é: ",real, "KG");
            break;
    
        default:
            console.log("Opção inválida!");
            break;
    }
}

validarDados();