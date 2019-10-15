// Criando um objeto não extensível através de 'preventExtensions'
const produto = Object.preventExtensions({
    nome: 'Ovo',
    preco: 1.99,
    tag: 'Promoção'
});
console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Ovos'; // Permitido alterações
produto.peso = '20g'; // Proibido criar novos atributos
delete produto.tag; // Permitido exclusão
console.log(produto);

// A função 'seal' permite apenas modificações nos atributos existentes
Object.seal(produto);

// O 'freeze' torna o objeto uma constante
Object.freeze(produto);