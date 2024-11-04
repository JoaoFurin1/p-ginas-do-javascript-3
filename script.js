//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4){
//     console.log('Sejam benvindo todos os alunos');
//     console.log(aluno1)
//     console.log(aluno2)
//     console.log(aluno3)
//     console.log(aluno4)
// };

//na função, não temos como saber de antemão quantos parâmetros serão passados; ai entra em ação o Rest Operator que irá transformar
//os dados/parâmetros em um Array

//vamos reescrever a função utilizando o Rest Operator
listaAlunos('Adamastor', 'Benevides', 'Conegundes', 'Demerval', 'Emengarda');
function listaAlunos(...alunos){
    console.log('Sejam benvindo todos os alunos');
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
};

//outro exemplo, soteador de números primos abaixo de 20
function sorteadorPrimo(...numeros){
    console.log(numeros);
//    const numeroSorteado =Math.random()*numeros.length;

    const numeroSorteado = Math.floor(Math.random()*numeros.length)

//    console.log(`posição: ${numeroSorteado} `);
    console.log(`numero sorteado: ${numeros[numeroSorteado]}`)
}

sorteadorAlunos(2,3,5,7,11,13,17,19)

function sorteadorAlunos(...numeros){

    const numeroSorteado = Math.floor(Math.random()*numeros.length)

//  console.log(`posição: ${numeroSorteado} `);
    console.log(`Aluno sorteado: ${numeros[numeroSorteado]}`)
}

sorteadorAlunos('Aline', 'Ana Clara', 'André', 'Bernardo', 'Daniel', 'Deivid', 'Enrique', 'Fernanda', 'Gabriel Rossa', 'Gabriel Zattera', 'Heloise', 'Izadora', 'Jefte', 'João Matheus', 'João Maurício', 'José', 'Julia', 'Kamila', 'Karina', 'Kevin', 'Leonardo Freitas', 'Leonardo Speçamílio', 'Lorenzo', 'Lucas', 'Matheus', 'Nicolas', 'Nycolas', 'Pedro Portela', 'Rafaela', 'Raphael', 'Rayra', 'Valentina', 'Vinícius', 'Vitor Garrett', 'Vitor Schuski', 'Pedro da Silva', 'Ana Silva' )
