// Comparando função simples com função arrow
const dobro = function (n) {
    return 2 * n;
};

let dobroArrow = (n) => {
    return 2 * n;
};

// Reduzindo, funções com 1 parâmetro - () podem ser removidos
// ! Para Funções sem parâmetros os () ou _ são obrigatórios 
dobroArrow = n => {
    return 2 * n;
};

// Reduzindo, corpo simples de uma linha - {} + return podem ser removidos
dobroArrow = n => 2 * n;
console.log(dobroArrow(10));

// This não varia dentro do contexto onde a função arrow é declarada
function Teste() {
    this.contador = 0;
    setInterval(() => {
        this.contador++;
        console.log(this.contador);
    }, 1000);
}