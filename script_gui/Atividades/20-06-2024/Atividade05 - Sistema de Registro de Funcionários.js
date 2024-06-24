const ler = require('readline-sync');

let funcionarios = [];
let check = true;

while (check) {
    
    console.clear();
    let funcionariosordem = funcionarios.sort((a, b) => a.nome.localeCompare(b.nome));
    let escolha = 0;
    console.log("-------------- Administração -----------");
    console.log("O que deseja fazer?");
    console.log("1- Adicionar um funcionário\n2- Editar um funcionário\n3- Exibir os funcinários\n4- Buscar funcionário\n5- Encerrar o programa");
    escolha = ler.questionInt();

    switch (escolha) {
        case 1:
            console.log("----------Adicionar um funcionário----------");
            let nome = ler.question("Nome: ").toLowerCase();
            let departamento = ler.question("Departamento: ");
            let cargo = ler.question("Cargo: ");
            let anos = ler.questionInt("Anos na empresa: ");
            funcionarios.push({nome: nome, departamento: departamento, cargo: cargo, anos: anos})
            let pergunta = ler.question("Para continuar digite qualquer tecla: ");
            break;
        case 2:
            console.log("--------Editar um funcionário----------");
            console.log("1- Excluir um funcionário\n2- Editar informação");
            let adm = ler.questionInt();
            if (adm == 1) {
                let excluir = ler.question("Nome: ").toLowerCase();
                let procuraex = funcionarios.indexOf(excluir);
                
                
                if (procuraex = 0) {

                    funcionarios.splice(0,0);
                    console.log("Funcionario", excluir, "excluído do sistema");
                   
                    
                } else if (procuraex > 0) {

                    funcionarios.splice(procuraex -1, procuraex);
                    console.log("Funcionario", excluir, "excluído do sistema");
                    
                    
                } else {
                    console.log("Funcionário não encontrado!");
                }
            } else {
                console.log("--------------Editando Informações-----------");
                let posicao = ler.questionInt("Linha: ");
                let escolhedit = ler.questionInt("1- Nome\n2- Departamento\n3- Cargo\n4- Anos na empresa\n");
                switch (escolhedit) {
                    case 1:
                        let newname = ler.question("Novo Nome: ");
                        funcionarios[posicao][0] = newname;
                       
                        
                        break;
                    case 2:

                        let newdepat = ler.question("Novo Departamento: ");
                        funcionarios[posicao][1]= newdepat;
                        
                        break;
                    case 3:
                        let newcargo = ler.question("Novo Cargo: ");
                        funcionarios[posicao][2] = newcargo;
                        break;
                    case 4:
                        let newano = ler.questionInt("Anos na empresa: ");
                        funcionarios[posicao][3] = newano;
                        
                        break;
                
                    default:
                        console.log("Opção Inválida!");
                        break;
                }
            }
            let pergunta2 = ler.question("Para continuar digite qualquer tecla: ");
            
            break;
        case 3:
            console.log("--------Exibindo Funcionários-------");
            console.table(funcionariosordem);
            let pergunta3 = ler.question("Para continuar digite qualquer tecla: ");
            
            break;
        case 4:
            console.log("---------------Procurando um funcionário--------------");
            let procura = ler.question("Nome do funcionário: ").toLowerCase();
            let filtrar_nome = funcionarios.filter(nome => nome.nome.toLowerCase().includes(procura));
            console.table(filtrar_nome);
            let pergunta4 = ler.question("Para continuar digite qualquer tecla: ");

            break;
        case 5:
            console.log("Deseja encerrar o programa?");
            let acabar = ler.questionInt("1- Sim\n2- Não\n");
            if (acabar == 1) {
                check=false;
            }
            break;
    
        default:
            console.log("Opção inválida!");
            pergunta = ler.question("Para continuar digite qualquer tecla: ");
            break;
    }

    
}