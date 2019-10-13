const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        // Nesse contexto o this aponta para pessoa
        console.log(this.saudacao);
    }
};

pessoa.falar();

const falar = pessoa.falar;
// Erro, this não tem mais a referência a objeto pessoa:
// conflito entre paradigmas funcional e OO
falar();

// O bind resolve a refrência do this objeto passado por parâmetro
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();


// Utilizando bind e self
function Teste() {
    this.contador = 0;

    const self = this;

    setInterval(function () {
        self.contador++;
        console.log(self.contador);
    } /*.bind(this)*/, 1000);

}