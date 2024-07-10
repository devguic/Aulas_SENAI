let funcio = [
    {nome: "Ricardo", sobrenome: "Felicio"},
    {nome: "Ana", sobrenome: "Silva"},
    {nome: "Bruno", sobrenome: "Santos"},
    {nome: "Carla", sobrenome: "Oliveira"},
    {nome: "Daniel", sobrenome: "Pereira"},
    {nome: "Eduarda", sobrenome: "Costa"},
    {nome: "Felipe", sobrenome: "Moura"},
    {nome: "Gabriela", sobrenome: "Almeida"},
    {nome: "Henrique", sobrenome: "Lima"},
    {nome: "Isabela", sobrenome: "Ferreira"}
];

let junta = [];

let juntaNome = funcionario => {
    let nome = "";
    nome = funcionario.nome + " " + funcionario.sobrenome;
    junta.push(nome);
}

funcio.forEach(juntaNome);

console.table(junta);