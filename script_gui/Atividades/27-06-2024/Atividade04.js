const ler = require('readline-sync');

let netflix = [
    {nome: "Tartaruga Ninja", tipo: "comédia", avaliacao: 6},
    {nome: "Vingadores", tipo: "ação", avaliacao: 8},
    {nome: "Todo Mundo em Pânico", tipo: "comédia", avaliacao: 6},
    {nome: "Mad Max: Estrada da Fúria", tipo: "ação", avaliacao: 8},
    {nome: "Pânico", tipo: "terror", avaliacao: 7},
    {nome: "Guardiões da Galáxia", tipo: "ação", avaliacao: 8},
    {nome: "Se Beber, Não Case!", tipo: "comédia", avaliacao: 7},
    {nome: "Invocação do Mal", tipo: "terror", avaliacao: 7},
    {nome: "Homem de Ferro", tipo: "ação", avaliacao: 7},
    {nome: "Corra!", tipo: "terror", avaliacao: 8},
    {nome: "tartaruga ninja", tipo: "comedia", avaliacao: 6}
];

let usuarios = []

let x = 1;

while (x<=3) {
    console.log(`\nUsuário ${x} =>\n`);

    let avaliacaoacao = ler.questionInt("Informe de 0 a 10 o quanto gosta de ação: ");
    let avaliacaoterror = ler.questionInt("Informe de 0 a 10 o quanto gosta de terror: ");
    let avaliacaocomedia = ler.questionInt("Informe de 0 a 10 o quanto gosta de comédia: ");

    usuarios.push({comedia: avaliacaocomedia, terror: avaliacaoterror, acao: avaliacaoacao});

    x++;

}  

console.log("---------------Filmes recomendados-------------");

let i = 0
for (let avaliacao of usuarios) {
    
    console.log(`Usuário: ${i + 1}`);
    if (avaliacao.acao > avaliacao.comedia) {
        if (avaliacao.acao > avaliacao.terror) {

            let filmesacao = netflix.filter(x => x.tipo.includes("ação"));
            console.table(filmesacao);

        } else {

            let filmesterror = netflix.filter(x => x.tipo.includes("terror"));
            console.table(filmesterror);

        }
    } else if (avaliacao.acao < avaliacao.comedia){
        
        if (avaliacao.comedia > avaliacao.terror) {
            
            let filmescomedia = netflix.filter(x => x.tipo.includes("comédia"));
            console.table(filmescomedia);

        } else {

            let filmesterror = netflix.filter(x => x.tipo.includes("terror"));
            console.table(filmesterror);
        }
    } else if (avaliacao.acao == avaliacao.comedia){
        if (avaliacao.acao > avaliacao.terror) {

            let filmesacao = netflix.filter(x => x.tipo.includes("ação"));
            console.table(filmesacao);
            let filmescomedia = netflix.filter(x => x.tipo.includes("comédia"));
            console.table(filmescomedia);

        } else {

            let filmesterror = netflix.filter(x => x.tipo.includes("terror"));
            console.table(filmesterror);

        }

}
i++;
}