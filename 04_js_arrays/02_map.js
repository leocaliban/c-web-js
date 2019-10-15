// Map cria um novo array a partir de outro, onde é possível trabalhar nos elementos do array original.
const numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map((e) => {
    return e * 2;
});
console.log(resultado);

const somar10 = e => e + 10;
const triplicar = e => e * 3;
const converterParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

const valores = numeros.map((e) => {
    return e + 10;
}).map(e => e * 3).map(converterParaDinheiro);
// 2 formas de arrow function aplicadas + função armazenada em atributo (para meios de aprendizagem)

console.log(valores);