const ler = require('readline-sync');

let eleicao = [];
let ganhador = 0;
let nomeganhador ="";
while (true) {
    
    let candidato = ler.question("Informe o nome do candidato a ser votado ou -1 para sair: ").toLowerCase();

if (candidato == '-1') {
        let conferir = ler.questionInt("Deseja encerrar mesmo?\n1-Sim\n2-Nã0\n");
        if (conferir == 1) {
            break;
        } 
    } else {
        
       let eleitor = ler.question("Informe seu nome: ");
       const candidatoExistente = eleicao.find(item => item.candidato === candidato);
        
       if (candidatoExistente) {
           // Se existe, adiciona o produto à categoria existente
           candidatoExistente.eleitor.push({ eleitor});
       } else {
           // Se não existe, cria uma nova entrada no carrinho para essa categoria
           eleicao.push({ candidato, eleitor: [{ eleitor}] });
       }
   }
    }

    eleicao.forEach(item => {
        
        console.log(`O candidato ${item.candidato} teve ${item.eleitor.length} votos`);

        if (Number(ganhador) < Number(item.eleitor.length)) {
            ganhador = Number(item.eleitor.length);
            nomeganhador = item.candidato;
        }
    });
    console.log("---------------------------------------");

    let aa = ler.question("Pressione qualquer tecla para continuar: ");
    console.clear();
    console.log("---------------------------------------");
    console.log(`O candidato ${nomeganhador} ganhou a eleição, com ${ganhador} votos`);