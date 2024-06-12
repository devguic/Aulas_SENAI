const ler = require('readline-sync');

let pagar = ler.questionFloat("Informe o valor da venda: R$");

console.log("Opções de pagamento: ");
console.log("1. Venda a Vista - desconto de 10%\n2. Venda a Prazo 30 dias - desconto de 5%\n3. Venda a Prazo 60 dias - mesmo preço\n4. Venda a Prazo 90 dias - acréscimo de 5%\n5. Venda com cartão de débito - desconto de 8%");
let opt = ler.questionInt("=> ");
let result = 0;

switch (opt) {
    case 1:
        result = pagar-=pagar*0.10;
        result=result.toFixed(2);
        console.log("Desconto de 10%, valor: R$",result);

        break;
    case 2:
        result = pagar-=pagar*0.05;
        result=result.toFixed(2);
        console.log("Desconto de 5%, valor: R$",result);
        
        break;
    case 3:
        result = pagar;
        result=result.toFixed(2);
        console.log("Sem desconto, valor: R$",result);
        
        break;
    case 4:
        result = pagar+=pagar*0.05;
        result=result.toFixed(2);
        console.log("Acréscimo de 5%, valor: R$",result);
        
        break;
    case 5:
        result = pagar-=pagar*0.08;
        result=result.toFixed(2);
        console.log("Desconto de 8%, valor: R$",result);
        
        break;

    default:
        console.log("Opção inválida!");
        break;
}
