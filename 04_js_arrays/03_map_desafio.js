const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":13.90}',
    '{"nome":"Kit de Lápis", "preco":41.22}',
    '{"nome":"Caneta", "preco":7.50}',
];

// Retornar um array com os preços dos produtos do carrinho

const fromJSON = json => JSON.parse(json);
const obterValor = produto => produto.preco;
const converterParaDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

const valores = carrinho.map(fromJSON).map(obterValor).map(converterParaDinheiro);

console.log(valores);