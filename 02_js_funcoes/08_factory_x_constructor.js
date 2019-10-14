// Class contructor
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`Meu nome é ${this.nome}.`);
    }
}
const p1 = new Pessoa('Jack');
p1.falar();


// Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}.`)
    };
};
const p2 = criarPessoa('Kim');
p2.falar();

// Constructor Function
function Persona(nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}.`);
    };
}
const p3 = new Persona('Salazar');
p3.falar();
