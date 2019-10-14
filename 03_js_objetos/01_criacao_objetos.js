// Criação com notação literal
const obj1 = {};

// Criação a partir do Object em JS
const obj2 = new Object;

// Funções contrutoras
function Produto(nome, preco, desconto) {
    this.nome = nome; // atributo público
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto);
    };
}
const p1 = new Produto('Caneta', 7.99, 0.15);

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    };
}
const funcionario = criarFuncionario('Jack', 5000.00, 1);
console.log(funcionario.getSalario());

// Parse de JSON para Object
const fromJSON = JSON.parse('{"info": "Documento JSON"}');
console.log(fromJSON.info);