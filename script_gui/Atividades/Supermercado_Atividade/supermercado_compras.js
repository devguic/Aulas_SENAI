const produtos = require('./supermercado_bancodedados');
const ler = require('readline-sync');  

let x = true;
let carrinho = [];





let adicionarProduto = (nomeProduto) => {

    let produtosDoSetor = produtos.filter(prod => prod.nome.toLowerCase() === nomeProduto.toLowerCase());
    if (produtosDoSetor.length > 0) {
        produtosDoSetor.forEach(produto => {
            console.log(`
                --------------------------------
                Nome: ${produto.nome}
                Marca: ${produto.marca}
                Preço: R$ ${produto.preco.toFixed(2)}
                --------------------------------
            `);
        });




        let escolhaMarca = ler.question("Digite a marca do produto ou digite 'sair' para sair: ").toLowerCase();

        if (escolhaMarca === "sair") {
            console.log("Operação cancelada.");
        
        } else {
            let produtoEscolhido = produtos.find(prod => 
                prod.nome.toLowerCase() === nomeProduto.toLowerCase() && 
                prod.marca.toLowerCase() === escolhaMarca
            );

            if (produtoEscolhido) {
                carrinho.push(produtoEscolhido);
                console.log(`Produto ${produtoEscolhido.nome} da marca ${produtoEscolhido.marca} adicionado ao carrinho`);
                esperaUsuario();
                
            } else {
                console.log("Produto com a marca especificada não encontrado.");
                esperaUsuario();
                
            }
        }
    } else {
        console.log("Nenhum produto encontrado com o nome especificado.");
        esperaUsuario();
    }
}


function exibirProdutosSetor(setor) {
    let produtosDoSetor = produtos.filter(prod => prod.setor.toLowerCase() === setor.toLowerCase());
    if (produtosDoSetor.length > 0) {
        produtosDoSetor.forEach(produto => {
            console.log(`
                --------------------------------
                Nome: ${produto.nome}
                Marca: ${produto.marca}
                Preço: R$ ${produto.preco.toFixed(2)}
                --------------------------------
            `);
        });
    } else {
        console.log("Nenhum produto encontrado para o setor especificado.");
        esperaUsuario();
    }
};






















let esperaUsuario = () => {
    let tempo = ler.question("Pressione ENTER para prosseguir");
    if (tempo != "paraguai") {
        
    } else {
        console.log("palavra secreta");
    }
}



let carrinhoComProduto = () => {


    let r = true;
    while (r) {
        
    let opt = ler.question("O que deseja fazer?\n 1- Excluir ítem\n2- Finalizar Compra\n 3-Continuar Comprando");
    switch (opt) {
        case 1:
            excluirItem();
            r= false;
            
            break;
        case 2:
            
            x = false;
            r= false;
            
            break;
        case 3:
            r = false;
            
            break;
    
        default:
            console.log("Opção Inválida");
            esperaUsuario();
            break;
    }
}}


//falta cancelar  produtos e finalizar a compra





let excluirItem = (nomeProdutoexcluir) =>{

    let produtosDoSetor = produtos.filter(prod => prod.nome.toLowerCase() === nomeProdutoexcluir.toLowerCase());
    if (produtosDoSetor.length > 0) {
        produtosDoSetor.forEach(produto => {
            console.log(`
                --------------------------------
                Nome: ${produto.nome}
                Marca: ${produto.marca}
                Preço: R$ ${produto.preco.toFixed(2)}
                --------------------------------
            `);
        });




        let escolhaMarca = ler.question("Digite a marca do produto ou digite 'sair' para sair: ").toLowerCase();

        if (escolhaMarca === "sair") {
            console.log("Operação cancelada.");
        
        } else {
            let produtoEscolhido = produtos.find(prod => 
                prod.nome.toLowerCase() === nomeProdutoexcluir.toLowerCase() && 
                prod.marca.toLowerCase() === escolhaMarca
            );

            if (produtoEscolhido) {
                carrinho.slice(produtoEscolhido);
                console.log(`Produto ${produtoEscolhido.nome} da marca ${produtoEscolhido.marca} foi removido do carrinho`);
                esperaUsuario();
                
            } else {
                console.log("Produto com a marca especificada não encontrado.");
                esperaUsuario();
                
            }
        }
    } else {
        console.log("Nenhum produto encontrado com o nome especificado.");
        esperaUsuario();
    }
};














let confirma = ler.questionInt("Realmente deseja comprar?\n1 - SIM   2 - NÃO\n=> ");
if (confirma === 1) {
   
    while (x) {
    
        if (carrinho.length == 0) {
            let setorEscolhido = ler.questionInt("Informe qual setor você deseja ir?\n1 - ALIMENTOS\n2 - BEBIDAS\n3 - HIGIENE\n4 - LIMPEZA\n5 - HORTIFRUTI\n=> "); // Escolha o setor para comprar

            switch (setorEscolhido) {
                case 1:
                    exibirProdutosSetor("alimentos");
                    let nomeProduto = ler.question("Digite o nome do produto que você quer: ");
                    adicionarProduto(nomeProduto);
                    break;
                case 2:
                    exibirProdutosSetor("bebidas");
                    let nomeProduto2 = ler.question("Digite o nome do produto que você quer: ");
                    adicionarProduto(nomeProduto2);
                    break;
                case 3:
                    exibirProdutosSetor("higiene");
                    let nomeProduto3 = ler.question("Digite o nome do produto que você quer: ");
                    adicionarProduto(nomeProduto3);
                    break;
                case 4:
                    exibirProdutosSetor("limpeza");
                    let nomeProduto4 = ler.question("Digite o nome do produto que você quer: ");
                    adicionarProduto(nomeProduto4);
                    break;
                case 5:
                    exibirProdutosSetor("hortifruti");
                    let nomeProduto5 = ler.question("Digite o nome do produto que você quer: ");
                    adicionarProduto(nomeProduto5);
                    break;
                default:
                    console.log("Opção inválida.");
                    esperaUsuario();
                    break;
            }
        } else if (carrinho.length > 0){
            // Lógica para quando o carrinho já tiver itens
            // Exemplo: perguntar se deseja continuar comprando ou finalizar a compra
        }
    }
}


//falta adicionar o excluir e testar, exibir o carrinho e fazer o sistema parar uma vez, falta somar os valores dentro do carrinho
//OLHAR O PQ ESPERA NN FUNCIONA



