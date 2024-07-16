const produtos = require('./supermercado_bancodedados');
const ler = require('readline-sync');

const usuarios = [
    {usuario: 88888, senha: "cruzeiromaiordeminas"},
    {usuario: 12345, senha: "biscoitinho123"},
    {usuario: 23456, senha: "senhamaisforte"},
    {usuario: 34567, senha: "gatinhobrilhante"},
    {usuario: 45678, senha: "ursinhocarinho"},
    {usuario: 56789, senha: "docinhodolce"},
    {usuario: 67890, senha: "coelhinhofofo"},
    {usuario: 78901, senha: "cachorrinholegal"},
    {usuario: 89012, senha: "leaozinhodivino"},
    {usuario: 90123, senha: "tigrezinhomagia"},
    {usuario: 11234, senha: "passarinhovoando"},
    {usuario: 22345, senha: "girafinhafun"},
    {usuario: 33456, senha: "elefantinhotop"},
    {usuario: 44567, senha: "zebrinhazoom"},
    {usuario: 55678, senha: "macacobrincalhao"},
    {usuario: 66789, senha: "pandadivertido"},
    {usuario: 77890, senha: "lobinhocute"},
    {usuario: 71197, senha: "password"}
];

let confereSenha = (usuario, senha) => {
    let usuarioEncontrado = usuarios.find(usuar => usuar.usuario === usuario && usuar.senha === senha);

    if (usuarioEncontrado) {
        return true;
    } else {
        console.log(`Usuário ou senha errada`);
        ler.question("ENTER para continuar: ");
        return false;
    }
}; // funciona

let adicionarProdutos = () => {
    let idoficial = produtos.length + 1;
    let name = ler.question("Nome: ");
    let setoor = ler.question("Setor: ");
    let precoo = ler.questionFloat("Preco: ");
    let marcaa = ler.question("Marca: ");

    produtos.push({id: idoficial, nome: name, setor: setoor, preco:precoo, marca: marcaa});
    console.table(produtos);
};// funciona

let excluirProdutos = (id) => {
    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice !== -1) {
        produtos.splice(indice, 1);
        console.log(`Produto com ID ${id} foi excluído.`);
        let confere = ler.question("Pressione ENTER para prosseguir: ");
    } else {
        console.log(`Produto com ID ${id} não encontrado.`);
        
        let conferee = ler.question("Pressione ENTER para prosseguir: ");
    };
};// funciona

let procurarProdutos = (pergunta) =>{

        switch (pergunta) {
            case 1:
                let id = ler.questionInt("Informe o ID: ");
                const indice = produtos.findIndex(produto => produto.id === id);
                if (indice !== -1) {
                    let mostraId = produtos.filter(produto => produto.id === id);
                    console.log(mostraId);
                    let confere2 = ler.question("Pressione ENTER para prosseguir: ");

                } else {
                    console.log("ID não encontrado!");
                    let confereeeee = ler.question("Pressione ENTER para prosseguir: ");
                }
                break;
            case 2:
                let nome = ler.question("Informe o nome do produto: ").toLowerCase();
                const indice2 = produtos.findIndex(produto => produto.nome.toLowerCase() === nome);
                if (indice2 !== -1) {
                    let mostraNome = produtos.filter(produto => produto.nome.toLowerCase() === nome);
                    console.log(mostraNome);
                    let confere3 = ler.question("Pressione ENTER para prosseguir: ");

                } else {
                    console.log("Nome não encontrado!");
                    let confere1 = ler.question("Pressione ENTER para prosseguir: ");
                }
                
                break;
            case 3:
                let setor = ler.question("Informe o setor do produto: ").toLowerCase();
                const indice3 = produtos.findIndex(produto => produto.setor.toLowerCase() === setor);
                if (indice3 !== -1) {
                    let mostraSetor = produtos.filter(produto => produto.setor.toLowerCase() === setor);
                    console.log(mostraSetor);
                    let confere4 = ler.question("Pressione ENTER para prosseguir: ");

                } else {
                    console.log("Setor não encontrado!");
                    let confere5 = ler.question("Pressione ENTER para prosseguir: ");
                }
                
                break;
            case 4:
                let marca = ler.question("Informe a marca do produto: ").toLowerCase();
                const indice4 = produtos.findIndex(produto => produto.marca.toLowerCase() === marca);
                if (indice4 !== -1) {
                    let mostraMarca = produtos.filter(produto => produto.marca.toLowerCase() === marca);
                    console.log(mostraMarca);
                    let confere6 = ler.question("Pressione ENTER para prosseguir: ");

                } else {
                    console.log("Marca não encontrada!");
                    let confere7 = ler.question("Pressione ENTER para prosseguir: ");
                }
                
                break;
        
            default:
                console.log("Opção inválida! ");
                let confereeee = ler.question("Pressione ENTER para prosseguir: ");
                break;
        }
};// funciona

let atualizarProdutos = (id) => {
    const indice = produtos.findIndex(produto => produto.id === id);

    if (indice !== -1) {
        let nome = ler.question(`Digite o novo nome do produto: `);
        let preco = parseFloat(ler.question(`Digite o novo preço do produto: `));
        let setor = ler.question(`Digite o novo setor do produto: `);
        let marca = ler.question(`Digite a nova marca do produto: `);

        produtos[indice].nome = nome;
        produtos[indice].preco = preco;
        produtos[indice].setor = setor;
        produtos[indice].marca = marca;

    } else {
        console.log(`Produto com ID ${id} não encontrado.`);
    }
}; // funciona

let areaAdministrativa = () => {
    let po = true;

    while (po) {
        
        console.log("---------- Àrea administrativa -------------");
        console.log("---- 1. Adicionar produtos -----------------");
        console.log("---- 2. Excluir produtos -------------------");
        console.log("---- 3. procurar produtos ------------------");
        console.log("---- 4. Atualizar produtos -----------------");
        console.log("---- 5. Listar todos os produtos -----------");
        console.log("---- 6. SAIR -------------------------------");
        let admopt = ler.questionInt("=> ");

        switch (admopt) {
            case 1:
                adicionarProdutos()
                console.clear();
                break;
            case 2:
                console.table(produtos);
                let idd = ler.questionInt("Informe o ID do produto que deseja excluir: ");
                excluirProdutos(idd);
                console.table(produtos);
                let confereee = ler.question("Pressione ENTER para prosseguir: ");
                
                console.clear();
                break;
            case 3:
                let pergunta = ler.questionInt("Deseja procurar pelo:\n1.ID\n2.Nome\n3.Setor\n4.Marca\n=> ")
                procurarProdutos(pergunta);
                
                console.clear();
                    break;
            case 4:
                let iddd = ler.questionInt("Informe o ID para ser atualizado: ");
                atualizarProdutos(iddd);
                let confere15 = ler.question("Pressione ENTER para prosseguir: ");
                
                console.clear();
                break;
            case 5:
                    console.table(produtos);
                    let confere16 = ler.question("Pressione ENTER para prosseguir: ");
                    
                    console.clear();
                    break;
            case 6:
                    let certeza = ler.questionInt("Tem certeza que deseja sair:\n1.Sim     2.Não\n=> ");
                    if (certeza == 1) {
                        po = false;
                    } 
                    
                    break;
        
            default:
                console.log("Opção inválida!! ");
                
                let confere18 = ler.question("Pressione ENTER para prosseguir: ");
                break;
        }
    }

} //funciona








module.exports = {confereSenha, adicionarProdutos, areaAdministrativa, excluirProdutos, procurarProdutos, atualizarProdutos};