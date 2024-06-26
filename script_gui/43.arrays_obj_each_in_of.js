// Exibindo as informações de um objeto/array com LOOP FOR EACH, IN e OF

let produtos = [
    {nome: "Teclado USB", preco: 99.90, quantidade: 3},
    {nome: "Mouse USB", preco: 49.90, quantidade: 5},
    {nome: "Monitor LED", preco: 799.90, quantidade: 2},
    {nome: "Cabo HDMI", preco: 29.90, quantidade: 10},
    {nome: "Headset Gamer", preco: 199.90, quantidade: 4},
    {nome: "Webcam HD", preco: 149.90, quantidade: 3},
    {nome: "Impressora Multifuncional", preco: 499.90, quantidade: 1},
    {nome: "Notebook", preco: 2999.90, quantidade: 1},
];

// Nomes dos produtos com valores maiores que 500 reais
produtos.forEach(produto => {
    if (produto.preco > 500) {
        console.log(`Produto: ${produto.nome} - Valor: ${produto.preco}`);
    } 
});
console.log("--------------------------------------");

// Nomes dos produtos com valores menores que 300 reais e a soma total de cada um e valor geral
let soma, total = 0;
for (let produto in produtos) {
    if (produtos[produto].preco < 300) {
        
        soma = produtos[produto].preco * produtos[produto].quantidade;
        total += soma;
        console.log(`Produto: ${produtos[produto].nome} - Total: R$${soma.toFixed(2)}`);

    }
}
console.log(`Total Geral: R$${total.toFixed(2)}`);
console.log("--------------------------------------");

// Nomes dos produtos com valores maiores que 800 e com quantidades no estoque menor que 3

for (let produto of produtos) {
    
    if ((produto.preco > 800) && (produto.quantidade < 3)) {
        
        console.log(`Produto: ${produto.nome} - Quantidade: ${produto.quantidade}`);
    }
}