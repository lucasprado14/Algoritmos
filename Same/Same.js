// Escrever uma função que aceite dois arrays, e que retorne "true" se
// o segundo array possuir os mesmos valores do primeiro, 
// mas ao quadrado(independente da ordem)

// Solução com loops aninhados:

// O indexOf é utilizado para encontrar um valor dentro de uma string ou 
// array, caso o valor não seja encontrado, ele retorna -1.
// Neste caso, o código está pegando os valores da matriz 2,
// comparando com a matriz 1 ^ 2, caso não encontre, retorna -1
// e imediatamente um "false"

// O .splice entra em ação quando o indexOf retorna 1, ou seja,
// quado ele encontra um correspondente ^2 na segunda matriz.
// E sempre que ele encontra essa correspondente, ele a remove,
// para garantir que cada valor seja utilizado apenas uma vez.

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

module.exports = { same }