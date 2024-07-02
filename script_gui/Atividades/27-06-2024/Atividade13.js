let matriz = [[],[],[],[],[],[],[],[],[],[]];
let soma = 0;
let numero1 = 0;

for (let i = 0; i < 10; i++) { //linhas
   
    for (let x = 0; x < 10; x++) { //Colunas
       soma = Number(x) + Number(i);
        if (i == x) {
            
            matriz[i][x] = "1";
        } else if (soma == 10){
            
            matriz[i][x]= "2";
        } else{
        }

        
    }
    
}
console.table(matriz);