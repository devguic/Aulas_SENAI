// Exibindo valores de uma matriz com FOR LOOP

let numeros = [
    [ 12, 7, 34, 19, 20],
    [ 10, 89, 21, 65, 66],
    [ 25, 35, 47, 17, 6],
    [  15, 71, 52, 61, 41]
];

let sacolao =[
    ["Frutas", "Legumes"],
    ["Abacate", "Abobrinha"],
    ["Uva", "Batata"],
    ["Abacate", "Cebola"],
    ["Maçã", "Cenoura"],
    ["Banana", "Pimentão"]
];



//console.log(numeros.length); retorna o numero de  linhas da matriz
//console.log(numeros[i].length); retorna o numero de dados da posição da matriz

for (let i = 0; i < numeros.length; i++) { //Linha


    for (let j = 0; j < numeros[i].length; j++) { //Coluna

        //console.log(numeros[i][j]);
        console.log(`Linha ${i} - Coluna ${j}: ${numeros[i][j]}`);
    }
    
}

for (let x = 0; x < sacolao[0].length; x++) { //Coluna
    
    console.log(`[ ${sacolao[0][x]} ]`); 

    for (let y = 1; y < sacolao.length; y++) { //Linha
       
        console.log(sacolao[y][x]);
    }
    
}