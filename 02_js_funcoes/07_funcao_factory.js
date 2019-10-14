// Factory simples para a criação de um objeto de forma literal
function criarPessoa() {
    return {
        nome: 'Jack',
        idade: 40
    };
}
console.log(criarPessoa());

// Factory com parâmetros
function criarProduto(nome, valor) {
    return {
        nome,
        valor,
        desconto: 5.00
    };
}
console.log(criarProduto('Cadeira', 500.00));