const ler = require('readline-sync');
let result = 0;

function validarDados() {
    
    let preco = ler.questionFloat("Informe o preço do produto: R$");
console.log("O cliente é: \n 1. Comum\n 2. Funcionário\n 3. VIP");
let opt = ler.questionInt("=> ");

comparacao(opt, preco);

}




function comparacao(opt, preco) {
    
    switch (opt) {
        case 1:
            result = preco;
            result = result.toFixed(2);
            console.log("Cliente comum, preço sem desconto: R$", result);
    
            break;
        case 2:
            result = preco -= preco*0.10;
            result = result.toFixed(2);
            console.log("Funcionário, preço com desconto de 10%: R$", result);
            break;
        case 3:
            result = preco -= preco*0.05;
            result = result.toFixed(2);
            console.log("Cliente VIP, preço com desconto de 5%: R$", result);
            break;
    
        default:
            console.log("Opção inválida!");
            break;
    }
}
validarDados();
