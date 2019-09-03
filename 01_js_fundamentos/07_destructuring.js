const pessoa = {
    nome: 'Ana',
    idade: 32,
    endereco: {
        logradouro: 'Rua Torta',
        numero: 241
    }
};

// Desestruturando OBJETOS
const { nome, idade } = pessoa;
console.log(nome, idade);

// Desestruturando com ALIAS
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Desestruturando objeto aninhado
const { endereco: { logradouro, numero } } = pessoa;
console.log(logradouro, numero);


// Desestruturando ARRAYS
const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);



// Desestruturando OBJETOS com FUNÇÕES
// Cria a função onde o parâmetro será um desestruturador com valores default
function random({ min = 0, max = 50 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const minMax = {
    max: 50,
    min: 45
};
// Chama a função passando o objeto que será desestruturado
console.log(random(minMax));



// Desestruturando ARRAYS com FUNÇÕES
function randomArray([min = 0, max = 100]) {
    // Verificar se os valores desestruturados estão na ordem correta (max > min)
    if (min > max) {
        // Inverter posição
        [min, max] = [max, min];
    }
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(randomArray([10, 20]));
console.log(randomArray([50, 40]));
console.log(randomArray([, 5]));

