const ler = require ('readline-sync');

let poluicao = [];
let total = 0;

while (true) {
    
    let nome = ler.question("Informe o nome que a poluição foi proveniente ou -1 para sair: ");
    if (nome == -1) {
        break;
    } else {
        let quantidade = ler.question("Informe a quantidade de poluição em megatons: ");
        poluicao.push({nome: nome, quantidade: quantidade});
    }

}
for (let anda of poluicao) {
    
    total = total + Number(anda.quantidade);
}

console.log("A quantidade de poulição total é: " + total + " megatons");

let escolha = ler.questionInt("Deseja cadastrar uma melhoria?\n1-Sim\n2-Não\n=> ");

if (escolha == 1) {
    
    let ajuda = ler.question("Informe a melhoria: ");
    console.log("Obrigado!");
} else {

    console.log("Obrigado!");
}