const URL = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

const axios = require('axios');

axios.get(URL).then(response => {
    const funcionarios = response.data;

    let busca;
    funcionarios.forEach((funcionario) => {
        if (funcionario.pais === 'China' && funcionario.genero === 'F') {
            if(!busca){
                busca = funcionario;
            } else{
                if (busca.salario > funcionario.salario) {
                    busca = funcionario;
                }
            }
        }
    });
    console.log(busca);
});
