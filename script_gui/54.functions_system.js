const produtos = require('./54.functions_bd');
const ler = require('readline-sync');

const cadProduto = () =>{

    let x = produtos.length; // Contar a quantidade de produtos do banco de dados
    let id = x+1;
    let nome = ler.question("Digite o nome do produto: ");
    let quantidade = ler.questionInt("Informe a quantidade: ");
    let preco = ler.questionFloat("Digite o valor do produto: ");
    adicionarProduto(id, nome, quantidade, preco);

};


const adicionarProduto = (id, nome, quantidade, preco) => {
    produtos.push({id: id, nome: nome, quantidade: quantidade, preco: preco});
    console.log("Produto Cadastrado com Sucesso!!");
    console.log("...");
    ler.question("Pressione Enter para volar ao MENU");
    console.clear();
};





const listarProduto = () => {
    console.log("-------Produtos Cadastrados--------");

    produtos.forEach( produto => console.log(
        `ID: ${produto.id} ------------- 
        Nome: ${produto.nome}
        Quantidade: ${produto.quantidade}
        Preço: ${produto.preco}
        --------------------------------`
        
    ));
    
    console.log("-----------------------------------");
    console.log("...");
    ler.question("Pressione Enter para volar ao MENU");
    console.clear();

};

const listarProdutoPorId = () =>{

    let check = true

    while (check) {
        let id = ler.questionInt("Informe o ID do produto: ");
    let produto = produtos.find(prod => prod.id === id);
    if (produto) {
        console.log(
            `ID: ${produto.id} ------------- 
            Nome: ${produto.nome}
            Quantidade: ${produto.quantidade}
            Preço: ${produto.preco}
            --------------------------------`
        );
        let opt = ler.questionInt("Deseja buscar outro produto? 1.SIM - 2.NÃO\n=> ");
        if (opt===1) {
            console.clear();
        } else {
            console.clear();
            
            check = false;
            
        }
    } else {
        console.log("Produto não encontrado!");
        console.log("-----------------------------------");
    console.log("...");
    ler.question("Pressione Enter para volar ao MENU");
    console.clear();
    }
    }

    
};




const attProduto = (id) =>{
    let produto = produtos.find(prod => prod.id === id);
    let attnome = ler.question(`Informe o nome do produto [${produto.nome}]: `);
    let attqtd = ler.questionInt(`Informe a nova quantidade [${produto.quantidade}]: `);
    let attpreco = ler.questionFloat(`Informe o novo preço [${produto.preco}]: `);
    produto.nome = attnome;
    produto.quantidade = attqtd;
    produto.preco = attpreco;
    console.log("Produto alterado com sucesso");
    console.log(
        `ID: ${produto.id} ------------- 
        Nome: ${produto.nome}
        Quantidade: ${produto.quantidade}
        Preço: ${produto.preco}
        --------------------------------`
    );
    console.log("...");
    ler.question("Pressione Enter para volar ao MENU");
    console.clear();

};

const atualizarProduto = () =>{

    let check = true

    while (check) {
        let id = ler.questionInt("Informe o ID do produto: ");
    let produto = produtos.find(prod => prod.id === id);
    if (produto) {
        console.log(
            `ID: ${produto.id} ------------- 
            Nome: ${produto.nome}
            Quantidade: ${produto.quantidade}
            Preço: ${produto.preco}
            --------------------------------`
        );
        let opt = ler.questionInt("Deseja alterar esse produto? 1.SIM - 2.NÃO\n=> ");
        if (opt===1) {
            console.clear();
            attProduto(id);
            check = false;
        } else {
            console.clear();
            
        }
    } else {
        console.log("Produto não encontrado!");
    }
    }

    
};


const excluirProduto = () =>{

    let check = true

    while (check) {
        let id = ler.questionInt("Informe o ID do produto: ");
    let produto = produtos.find(prod => prod.id === id);
    let id_ex = produtos.findIndex(prod => prod.id === id);
    if (produto) {
        console.log(
            `ID: ${produto.id} ------------- 
            Nome: ${produto.nome}
            Quantidade: ${produto.quantidade}
            Preço: ${produto.preco}
            --------------------------------`
        );
        let opt = ler.questionInt("Tem certeza que deseja excluir esse produto? 1.SIM - 2.NÃO\n=> ");
        if (opt===1) {
            console.clear();
            produtos.splice(id_ex,1);
            console.log("Produto foi excluído com sucesso");
            
            check = false;

        } else {
            console.clear();
            
            
        }
    } else {
        console.log("Produto não encontrado!");
        console.log("-----------------------------------");
        console.log("...");
        ler.question("Pressione Enter para volar ao MENU");
        console.clear();
    }
    }

    
};

module.exports = {listarProduto, cadProduto, atualizarProduto, listarProdutoPorId, excluirProduto};