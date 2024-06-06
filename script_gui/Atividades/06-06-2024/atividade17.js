const ler = require('readline-sync');

let hp = ler.questionInt("Informe a idade do primeiro homem: ");
let hs = ler.questionInt("Informe a idade do segundo homem: ");
let mp = ler.questionInt("Informe a idade da primeira mulher: ");
let ms = ler.questionInt("Informe a idade da segunda mulher: ");

if (hp > hs) {
    if (mp > ms) {
        let soma1 = hp+ms;
        let soma2 = hs + mp;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é:",soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é:",soma2);
    } else {
        let soma1 = hp + mp;
        let soma2 = hs + ms;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é:",soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é:",soma2);
    }
} else {
    if (mp > ms) {
        let soma1 = hs+ms;
        let soma2 = hp + mp;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é:",soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é:",soma2);
    } else {
        let soma1 = hs + mp;
        let soma2 = hp + ms;
        console.log("A soma da idade do homem mais velho com a mulher mais nova é:",soma1);
        console.log("A soma da idade do homem mais novo com a mulher mais velha é:",soma2);
    }
}