// Cadastro de Usuário utilizando JSON

const fs = require('fs');
const {ok, users, jogo, cadastrar, validarCadastro, exibirRanking, ler} = require('./jogodeadivinhacao_function');
const { question } = require('readline-sync');



check = true;

while (check) {
    console.clear();
    console.log(`
        --------------------------
            Jogo do pai de nô

        
        O que deseja fazer:
        1. Jogar
        2. Cadastrar
        3. Exbir Ranking
        4. Sair
        --------------------------
        `);

        let opt = ler.questionInt("=> ");
    switch (opt) {
        case 1:
            let nick = ler.question("Informe seu nick: ");
            let email = ler.questionEMail("Informe seu email: ");
            validarCadastro(nick, email);
            console.clear();
           

            break;
        case 2:
            let nome = ler.question("Informe o nick: ");
            let eemail = ler.questionEMail("Informe seu email: ");

            cadastrar(nome, eemail);

            break;
        case 3:
            
            exibirRanking();
            let continuarr = ler.question("Pressione ENTER para prosseguir: ");

            break;
        case 4:
            
           check = false;
           console.log("Finalizando o programa...");
           break;
    
        default:
            console.log("Opção inválida!!");
            let continuarrr = ler.question("Pressione ENTER para prosseguir: ");
            break;
    }



    
}
