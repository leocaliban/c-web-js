const alunos = [
    { nome: 'Jack', nota: 7.3, bolsista: false },
    { nome: 'Kim', nota: 8.2, bolsista: true },
    { nome: 'Natasha', nota: 9.8, bolsista: false },
    { nome: 'Bryant', nota: 8.7, bolsista: true }
];

const bolsista = alunos.map((a) => a.bolsista).reduce((acumulador, atual) => {
    return acumulador && atual;
});
console.log('Todos os alunos são bolsistas? ' + bolsista);

const temBolsista = alunos.map((a) => a.bolsista).reduce((acumulador, atual) => {
    return acumulador || atual;
});
console.log('Algum aluno é bolsista? ' + temBolsista);