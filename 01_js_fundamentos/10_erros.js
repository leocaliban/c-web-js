function imprimrirCaixaAlta(obj) {
    try {
        console.log(obj.nome.toUpperCase().append('!!!'));
    } catch (error) {
        tratarErro(error);
    }
}

function tratarErro(error) {
    throw new Error('Ocorreu um erro: ', error);
}

const obj = {
    name: 'Jack'
};

imprimrirCaixaAlta(obj);