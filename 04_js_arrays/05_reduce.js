const alunos = [
    { nome: 'Jack', nota: 7.3, bolsista: false },
    { nome: 'Kim', nota: 8.2, bolsista: true },
    { nome: 'Natasha', nota: 9.8, bolsista: false },
    { nome: 'Bryant', nota: 8.7, bolsista: true }
];

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log('Acumulador: ' + acumulador);
    console.log('Atual: ' + atual);
    return acumulador + atual;
}, 0); // <- valor inicial do acumulador (opcional)

console.log('RESULTADO: ' + resultado);