const comidas = ['Pizza', 'Arroz', 'Salada', 'Hamburger'];

comidas.pop(); // Remove o último elemento do array
comidas.shift(); // Remove o primeiro elemento do array

comidas.push('Cachorro Quente'); // Adiciona um elemento ao final do array
comidas.unshift('Pastel'); // Adiciona um elemento no início do array

// Adicionar e remover elementos com splice
// A partir da posição 2 do array, não remover ninguém e adicionar 2 elementos
comidas.splice(2, 0, 'feijao', 'Lasanha', 'Coxinha');
console.log(comidas);

// A partir da posição 2, remover 1 elemento e adicionar outro
comidas.splice(2, 1, 'Feijão');
console.log(comidas);

// Slice para copiar partes de um array
// Cria uma cópia do array a partir da posição 2 até a 5 "parametros -> (inicio, fim)"
const comidasRenovadas = comidas.slice(2, 5);
console.log(comidasRenovadas);