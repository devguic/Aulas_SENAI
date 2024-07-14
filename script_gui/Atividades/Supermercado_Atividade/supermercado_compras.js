const produtos = require('./supermercado_bancodedados');
const ler = require('readline-sync');  

let x = true;
let carrinho = [];

let esperaUsuario = () => {
    console.log("...");
    let tempo = ler.question("Pressione ENTER para prosseguir");
    console.log("------------------------");
    console.log('\x1Bc');
}

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
}

let somaCarrinho = () => {
    let totalAPagar = 0;
    for (let preco of carrinho) {
        totalAPagar += preco.preco;
    }
    return totalAPagar;
}

let formaDePagamento = 0;

let carrinhoComProduto = (opt) => {
    let r = true;
    while (r) {
        console.log(`Carrinho com ${carrinho.length} itens, total: R$${somaCarrinho().toFixed(2)}`);
        switch (opt) {
            case 1:
                console.table(carrinho);
                let nomeProdutoexcluir = ler.question("Digite o nome do produto que você quer excluir: ");
                excluirItem(nomeProdutoexcluir);
                r = false;
                break;
            case 2:
                let pagarACompra = 0;
                console.log(`Total à pagar: R$${somaCarrinho().toFixed(2)}`);
                console.log("Compra está prestes a ser finalizada, qual é a forma de pagamento?");
                formaDePagamento = ler.questionInt("1.Débito (desconto de 5%)\n2.Pix (desconto de 10%)\n3.Crédito (acréscimo de 7%)\n4.Boleto (acréscimo de 3%)\n=> ");
                switch (formaDePagamento) {
                    case 1:
                        pagarACompra = somaCarrinho() - (somaCarrinho() * 0.05);
                        console.log(`Opção débito, preço: R$${pagarACompra.toFixed(2)}`);
                        console.log("...");
                        console.log("Pagamento Aprovado! Obrigado pela preferência");
                        esperaUsuario();
                        r = false;
                        break;
                    case 2:
                        pagarACompra = somaCarrinho() - (somaCarrinho() * 0.10);
                        console.log(`Opção Pix, preço: R$${pagarACompra.toFixed(2)}`);
                        console.log("...");
                        console.log("Pagamento Aprovado! Obrigado pela preferência");
                        esperaUsuario();
                        r = false;
                        break;
                    case 3:
                        pagarACompra = somaCarrinho() + (somaCarrinho() * 0.07);
                        console.log(`Opção crédito, preço: R$${pagarACompra.toFixed(2)}`);
                        console.log("...");
                        console.log("Pagamento Aprovado! Obrigado pela preferência");
                        esperaUsuario();
                        r = false;
                        break;
                    case 4:
                        pagarACompra = somaCarrinho() + (somaCarrinho() * 0.03);
                        console.log(`Opção boleto, preço: R$${pagarACompra.toFixed(2)}`);
                        console.log("...");
                        console.log("Gerando boleto");
                        console.log("Pagamento Aprovado! Obrigado pela preferência");
                        esperaUsuario();
                        r = false;
                        break;
                    default:
                        console.log("Opção digitada inválida!");
                        r = false;
                        break;
                }
                break;
            case 3:
                let setorEscolhido2 = ler.questionInt("Informe qual setor você deseja ir?\n1 - ALIMENTOS\n2 - BEBIDAS\n3 - HIGIENE\n4 - LIMPEZA\n5 - HORTIFRUTI\n=> "); // Escolha o setor para comprar

                switch (setorEscolhido2) {
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
                r = false;
                break;
            default:
                console.log("Opção inválida.");
                esperaUsuario();
                r = false;
                break;
        }
    }
}

let excluirItem = (nomeProdutoexcluir) => {
    let produtosDoSetor = carrinho.filter(prod => prod.nome.toLowerCase() === nomeProdutoexcluir.toLowerCase());
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
            let produtoEscolhido = carrinho.find(prod => 
                prod.nome.toLowerCase() === nomeProdutoexcluir.toLowerCase() && 
                prod.marca.toLowerCase() === escolhaMarca
            );

            if (produtoEscolhido) {
                let index = carrinho.findIndex(prod => prod.nome.toLowerCase() === produtoEscolhido.nome.toLowerCase() && prod.marca.toLowerCase() === produtoEscolhido.marca.toLowerCase());
                if (index !== -1) {
                    carrinho.splice(index, 1);
                    console.log(`Produto ${produtoEscolhido.nome} da marca ${produtoEscolhido.marca} foi removido do carrinho`);
                } else {
                    console.log("Produto não encontrado no carrinho.");
                }
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
        } else if (carrinho.length > 0) {
            if (formaDePagamento != 0) {
                x = false;
            } else {
                let opt = ler.questionInt("O que deseja fazer?\n 1- Excluir ítem\n 2- Finalizar Compra\n 3- Continuar Comprando\n=> ");
                carrinhoComProduto(opt);
            }
        }
    }
} else {
    console.log("Compra cancelada");
}


//Tudo funcional, pensar em uma forma de adicionar os produtos por quantidade
