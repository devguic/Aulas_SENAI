let produtos = [
    {nome: "Arroz", preco: 20.00},
    {nome: "Feijão", preco: 8.50},
    {nome: "Macarrão", preco: 4.00},
    {nome: "Carne", preco: 35.00},
    {nome: "Leite", preco: 5.00},
    {nome: "Ovos", preco: 12.00},
    {nome: "Pão", preco: 6.00},
    {nome: "Queijo", preco: 25.00},
    {nome: "Café", preco: 15.00},
    {nome: "Açúcar", preco: 3.50}
];
let novopreco = [];
let aumento = 20;

let aumentaPreco = (produto) =>{
    let novovalor = produto.preco + (produto.preco * (aumento/100));
    novovalor = novovalor.toFixed(2);
    novopreco.push({nome: produto.nome, preco: novovalor});
};
produtos.forEach(aumentaPreco);
console.table(novopreco);