const produtos = [
    { nome: 'Notebook', preco: 3545, fragil: true },
    { nome: 'Tablet', preco: 2000, fragil: true },
    { nome: 'Cadeira de ferro', preco: 50, fragil: false },
    { nome: 'Livro', preco: 43, fragil: false },
    { nome: 'Taça de Cristal', preco: 453, fragil: true }
];

const produtosFrageis = produtos.filter((p) => {
    return p.fragil === true;
});
console.log(produtosFrageis);

const filterFragil = p => p.fragil;
const filterCaro = p => p.preco >= 500;

const produtosFrageisECaros = produtos.filter(filterFragil).filter(filterCaro);

console.log(produtosFrageisECaros);