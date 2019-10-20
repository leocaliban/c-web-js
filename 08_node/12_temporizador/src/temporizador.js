const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 0', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(() => {
    tarefa1.cancel();
    console.log('Cancelando tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(0)];
regra.hour = 13;
regra.second = 5;

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Tarefa 2', new Date().getSeconds());
});