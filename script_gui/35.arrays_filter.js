// Filtrar Elementos dentro de um Array

let nomes = ["Marta", "Joao", "Jonas", "Maria", "Geralda", "Alice"];

let numeros = [12, 34, 51, 11, 78, 41, 23];

let usuarios = [
    {nome: "Marta Rocha", idade: 46, email: "marta@gmail.com"},
    {nome: "Marcos Sena", idade: 24, email: "marcos@outlook.com"},
    {nome: "Luiza Silva", idade: 19, email: "lulu2015@gmail.com"},
    {nome: "Jonas Maia", idade: 21, email: "jonas@hotmail.com"}
];
usuarios.push({nome: "Rogerio Matias", idade: 22, email: "roger@hotmail.com"});

let filtrar_nome = nomes.filter(nome => nome.toLowerCase().includes('j'));

console.log(filtrar_nome);

let filtrar_nums = numeros.filter(num => num > 15);
console.log(filtrar_nums);

let filtrar_idade = usuarios.filter(user => user.idade > 21);
console.table(filtrar_idade);