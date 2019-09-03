// Comparando valor
console.log('01)', '1' == 1);

// Comparando tipo e valor
console.log('02)', '1' === 1);

// Para comparar endereço em memória
const d1 = new Date(0);
const d2 = new Date(0);

console.log('03)', d1 == d2);
console.log('04)', d1 === d2);

// Comparar valores de mesmo tipo e valor
console.log('05)', d1.getTime() == d2.getTime());
console.log('06)', d1.getTime() === d2.getTime());

// Mais recomendado comparar estritamente com ===