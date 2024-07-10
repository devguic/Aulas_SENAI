let notasalunos = [
    {aluno: "Gabriel", nota: 67},
    {aluno: "Ana", nota: 85},
    {aluno: "Bruno", nota: 45},
    {aluno: "Carla", nota: 78},
    {aluno: "Daniel", nota: 32},
    {aluno: "Eduarda", nota: 74},
    {aluno: "Felipe", nota: 50},
    {aluno: "Gabriela", nota: 82},
    {aluno: "Henrique", nota: 60},
    {aluno: "Isabela", nota: 90}
];
let passoudeano = [];

let verificaNota = aluno => {
    if (aluno.nota >= 60) {
        let nome1 = "";
        let nomemaiusculo = "";
        nome1 = aluno.aluno;
        nomemaiusculo = nome1.toUpperCase();
        passoudeano.push({nome: nomemaiusculo, nota: aluno.nota});
       
    }

};

notasalunos.forEach(verificaNota);

console.table(passoudeano);