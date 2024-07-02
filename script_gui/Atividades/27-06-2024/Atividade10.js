const ler = require('readline-sync');

let doacoes=[];
let instituicao=[];
let total = 0;

while (true) {
    
    let escolha = ler.questionInt("1- Continuar\n2- Sair\n=> ");
    if (escolha == 2) {
        break;
    } else {
        let tipo = ler.questionInt("A doação é pessoal ou de uma Instituição?\n1-Pessoal\n2-Instituição\n=> ");
        switch (tipo) {
            case 1:
                let nome = ler.question("Nome: ");
                let valor = ler.questionFloat("Valor: ")
                doacoes.push({nome:nome, valor:valor});

                break;
            case 2:
                let nome2 = ler.question("Nome: ");
                let valor2 = ler.questionFloat("Valor: ")
                instituicao.push({nome:nome2, valor:valor2});
                
                break;
        
            default:
                console.log("Opção Inválida");
                break;
        }
    }
}

if (instituicao.length >= doacoes.length) {


    for (let i = 0; i < instituicao.length; i++) {

        if (doacoes[i] == undefined) {
            
            total += instituicao[i].valor;
        } else{
        
        total += doacoes[i].valor + instituicao[i].valor;
        }
    }
    
} else {
    

    for (let i = 0; i < doacoes.length; i++) {
        
        if (instituicao[i] == undefined) {
            
            total += doacoes[i].valor;
        } else{
        
        total += doacoes[i].valor + instituicao[i].valor;
        }
    }
}
total = total.toFixed(2);
console.log(`O total recebido pelas doações é R$${total}`);
