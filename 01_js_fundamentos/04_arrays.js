// Declaração de array forma literal
const valores = [7, 9, 10, 5];

// Atribuição de valor em um índice do array
valores[4] = 1;

// Adicionando elemento na última posição
valores.push('4');

console.log(valores);

// Remover último elemento do array
console.log(valores.pop());
console.log(valores);

// Remover elemento pelo índice
delete valores[0];
console.log(valores);

console.log(valores[0]);
