const pai = {
    nome: 'Jack',
    corCabelo: 'Preto'
};

const filha = Object.create(pai); // Relaciona o protótipo de filha
filha.nome = 'Kim';
console.log(filha.corCabelo);

const filha2 = Object.create(pai, {
    nome: {
        value: 'Nina',
        writable: false,
        enumerable: true
    }
});
console.log(filha2.nome);

