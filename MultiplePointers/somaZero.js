// Escreva ua função que aceite um array ORDENADO. Esta função deve
//  encontrar o primeiro par de valores que somados resultam em 0.

function somaZero(arr) {
    let esquerda = 0
    let direita = arr.length - 1;
    while (esquerda < direita) {
        let soma = arr[esquerda] + arr[direita];
        if (soma === 0) {
            return [arr[esquerda], arr[direita]];
        } else if (soma > 0) {
            direita--;
        } else {
            esquerda++;
        }
    }
}
module.exports = { somaZero }
// somaZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])