// Entrada IF ELSE - Estrutura Condicional

const ler = require('readline-sync');

let nome = ler.question("Informe o nome do aluno: ");
let nota1 = ler.question("Digite a primeira nota: ");
let nota2 = ler.question("Digite a segunda nota: ");
let nota3 = ler.question("Digite a terceira: ");

let media = (Number(nota1) + Number(nota2) + Number(nota3))/3;
media = media.toFixed(2);

if (media >= 60 ){
    console.log(nome + ", está aprovado!Com a média de: " + media);
} else if ((media > 40) && (media <=59)) {
    console.log(nome + ", está de recuperação! Com a média de: " + media);
} else {
    console.log(`${nome}, está reprovado! Com a média de: ${media}`);
}