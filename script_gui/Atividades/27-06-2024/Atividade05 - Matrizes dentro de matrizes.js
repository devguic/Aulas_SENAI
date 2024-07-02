const ler = require('readline-sync');

// Inicializa o carrinho de compras
const carrinho = [];
let total = 0;
let totalcat = 0;
while (true) {
    const categoria = ler.question("Informe a categoria a ser cadastrada ou -1 para sair: ").toLowerCase();
    
    if (categoria === '-1') {
        break;
    } else {
        const produto = ler.question("Informe o nome do produto: ");
        const preco = ler.questionFloat("Informe o preço do produto: ");
        const quantidade = ler.questionInt("Informe a quantidade: ");
    
        // Procura se a categoria já existe no carrinho
        const categoriaExistente = carrinho.find(item => item.categoria === categoria);
        
        if (categoriaExistente) {
            // Se existe, adiciona o produto à categoria existente
            categoriaExistente.produtos.push({ produto, preco, quantidade });
        } else {
            // Se não existe, cria uma nova entrada no carrinho para essa categoria
            carrinho.push({ categoria, produtos: [{ produto, preco, quantidade }] });
        }
    }
}
console.log(carrinho);
// Exibe o carrinho completo
console.log("Carrinho completo:");
carrinho.forEach(item => {
    console.log(`Categoria: ${item.categoria}`);
    console.table(item.produtos);
    for (let produto of item.produtos) {
        
        total += (produto.preco * produto.quantidade);
        totalcat += (produto.preco * produto.quantidade);
    }
    console.log(`O total da categoria ${item.categoria} é R$${totalcat}`);
    totalcat = 0;
    console.log("\n -------------------------------------\n");
});

console.log(`Total geral é: R$${total}`);