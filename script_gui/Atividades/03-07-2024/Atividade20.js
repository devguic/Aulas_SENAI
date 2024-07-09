let jorge = 1.72;
let roberto = 1.65;
let anos = 0;

function umMaiorQueOoutro() {

    while (jorge > roberto) {
        jorget();
        robert();
        anos++;
    }
    exibirDados();
}

function jorget() {
    jorge = jorge + 0.03;
}

function robert() {

    roberto = roberto + 0.04
    
}

function exibirDados() {
    console.log("Serão necessários", anos, "anos para Roberto ficar maior que Jorge");
    
}
umMaiorQueOoutro();