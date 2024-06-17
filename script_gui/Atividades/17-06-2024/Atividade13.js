
let linha = 1;
let output = '';

while (linha <= 9) {
 
    output += '*'.repeat(linha) + '\n';
    linha++; 
}

console.log(output);