// Armazenar função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenar arrow function em uma variável
const somaArrow = (a, b) => {
    return a + b;
};
console.log(somaArrow(5, 5));

// Arrow function com retorno implícito
const subtracaoArrow = (a, b) => a - b;

console.log(subtracaoArrow(20, 5));

const imprimirNome = nome => console.log(nome);

imprimirNome('Jack Bauer');

