class Pai {
    constructor(nome) {
        this.nome = nome;
    }
}

class Filho extends Pai {
    constructor(nome, profissao = 'Policial') {
        super(nome);
        this.profissao = profissao;
    }
}

const filho = new Filho('Jack');
console.log(filho);