const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('SERVER WORKS!');
});

app.get('/pessoas', (request, response) => {
    return response.json(
        [
            {
                nome: 'Jack Bauer',
                cidade: 'LA'
            },
            {
                nome: 'Nina Myers',
                cidade: 'NY'
            },
            {
                nome: 'Kim Bauer',
                cidade: 'LA'
            },
        ]
    );
});

app.listen(3030);