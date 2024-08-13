const ler = require('readline-sync');
// Cadastro de Usuário utilizando JSON

const fs = require('fs');
const { log } = require('console');

const arquivoJSON = '56.dados.json';
let users = [];

if (!fs.existsSync(arquivoJSON)) {
    const dados_ini = [];
    fs.writeFileSync(arquivoJSON, JSON.stringify(dados_ini, null, 2), 'utf-8');
}

let usersJson = fs.readFileSync(arquivoJSON,'utf-8');
users = JSON.parse(usersJson);







let ok = false;

let jogo = (nick, email) =>{


    let user = users.find(user => user.nick === nick);
    console.log("--------------------");
    console.log("Adivinhe o número (de 1 a 50)");

    let numeroEscolhido = ler.questionInt("Escolha um número de 1 a 50: ");
    let numeroAcertar = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

    if (numeroEscolhido === numeroAcertar) {
        console.log("Sortudo!!! Acertou o número");
        user.pontos += 1;
        setTimeout(()=>{
            console.log("Processando...");
        }, 3000);
        

        
    } else {
        console.log(`Infelizmente não foi dessa vez, o número era ${numeroAcertar}`);
        
    }
    user.tentativas += 1;
    fs.writeFileSync(arquivoJSON, JSON.stringify(users, null, 2), 'utf-8');

}


let cadastrar = (nick, email) => {


    let user_nick = users.some(user => user.nick === nick);
    let user_email = users.some(user => user.email === email);

    if (user_nick) {

        console.log("Nick já existente");
        console.log("Utilize outro");
        let ff = ler.question("Pressione ENTER para continuar: ");
        
    } else if (user_email) {
        
        console.log("Email já cadastrado");
        console.log("Utilize outro");
        
        let ff1 = ler.question("Pressione ENTER para continuar: ");
    } else{

    console.log(`
        ----------------------------------
                    Cadastro

        Nick: ${nick};
        E-mail: ${email};
        ----------------------------------
        `);

    let confirma = ler.questionInt("Procede as informações?\n1.SIM  -  2.NÃO\n=> ");
    if (confirma === 1) {
        
        users.push({nick: nick, email: email, pontos: 0, tentativas: 0});
        fs.writeFileSync(arquivoJSON, JSON.stringify(users, null, 2), 'utf-8');
        console.log(`Seja bem vindo ao jogo ${nick}`);
    } else {
        setTimeout(()=>{
            console.log("Processando!");
        }, 3000);
    }
}

let validarCadastro = (nick, email) => {

}}

let validarCadastro = (nick, email) =>{
    let conferirNome = users.some(user=> user.nick === nick);
    let conferirEmail = users.some (user => user.email === email);

    if (conferirNome && conferirEmail) {

        ok = true;

        if (ok == true) {
                
            jogo(nick, email);
            let t = true;
            while (t) {
                let opt2 = ler.questionInt("Deseja jogar novamente?\n1.SIM  -  2.NÃO\n=> ");
                if (opt2 === 1) {

                    jogo(nick, email);

                } else {
                    t = false;
                }
                
            }   
        }

    } else if (conferirNome){

        console.log("email incorreto");
        let tempo = ler.question("pressione ENTER para continuar: ");
        
    } else {
        console.log("nick incorreto");
        let tempo = ler.question("pressione ENTER para continuar: ");
    }
}

let exibirRanking = () =>{


    let ranking = users.sort((y, x) => y.pontos - x.pontos );
    console.table(ranking);
}


module.exports = {ok, users, jogo, cadastrar, validarCadastro, exibirRanking, ler};

