// Trabalhando com funções no Javascript - Utilizando dois ou mais parâmetros
// Objetos e Arrays

const ler = require('readline-sync');

function criarEvento(nome, local, data, hora, participantes, custoPorPart) {

    let custoTotal = calcularCustoTotal(participantes, custoPorPart);

    return{
        Nome: nome,
        Local: local,
        Data: data,
        Hora: hora,
        Participantes: participantes,
        'Custo por participante': custoPorPart,
        'Custo total' : custoTotal
    };

}

function calcularCustoTotal(part, custoPP) {

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL' }).format(part * custoPP);
    
}

function cadastrar() {

let nome = ler.question("Informe o nome do evento: ");
let local = ler.question("Informe o nome do local do evento: ");
let data = ler.question("Informe a data do evento: ");
let hora = ler.question("Informe qual é o horário do evento: ");
let part = ler.questionInt("Informe a quantidade de participantes: ");
let custoPP = ler.questionFloat("Informe o valor que vada um irá pagar: ");
let EVT = criarEvento(nome, local, data, hora, part, custoPP);

console.clear();
exibirevento(EVT)

}

let exibirevento = function(evento) {

console.log("--------- Informações do Evento ------------");

for (const [chave, valor] of Object.entries(evento)) {
    
    console.log(`=> ${chave} : ${valor}`);

}

console.log("--------------------------------------------");
    
}

cadastrar();
