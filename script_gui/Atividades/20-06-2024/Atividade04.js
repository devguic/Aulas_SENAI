const ler = require('readline-sync');

let lista = [];
let presenca = [];
let x = 0;
let y = 0;
let check = true
let conf = true
let total_presente = 0

while (check) {
    
    let nomes_cadastrar = ler.question("Informe o nome para ser colocado na lista ou 0 para sair: ").toLowerCase();
    if (nomes_cadastrar == 0) {
        check = false;
    } else {
        
        lista.push(nomes_cadastrar);
    }
}
console.log(lista);
let totlist = lista.length;

while (conf) {
    
    let procura = ler.question("Informe o nome da pessoa presente ou 0 para sair: ").toLowerCase();
    if (procura == 0) {
        conf = false;
    } else {
            let fbi = 0;
             fbi = lista.indexOf(procura);
            if (fbi == 0) {
            console.log(`Nome ${procura} está na lista, na ${fbi + 1}ª posição`);
            lista.splice(0, fbi);
            total_presente++;

        }else if (fbi > 0){

        console.log(`Nome ${procura} está na lista, na ${fbi + 1}ª posição`);
        lista.splice(fbi-1, fbi);
        total_presente++;
        

        } else {
        console.log(`Nome ${procura} não está na lista!!`);
        }
    }
}
let total = totlist - total_presente;
console.log(`Faltaram ${total} pessoas`);