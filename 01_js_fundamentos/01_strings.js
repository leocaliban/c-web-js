const name = 'SHARK';

// Pega o caractere na posição 2 da string name
console.log(name.charAt(2));

// Aquando o valor da posição não for compatível com o tamanho da string o resultado é um valor vazio
console.log(name.charAt(10));

// Obtém o código ANSI do caractere
console.log(name.charCodeAt(2));

// Recorta a string a partir de um índice
console.log(name.substring(2));

// Recorta a string a de um índice inical até o índice final
console.log(name.substring(0, 3));

// Concatena strings
console.log('Animal: '.concat(name).concat(".") + 40);

// Substituição de caracteres
console.log(name.replace('H', 'P'));

// Divisão de string através de um critério, valor retornado é um array
console.log('SHARK,DUCK,COW'.split(','));