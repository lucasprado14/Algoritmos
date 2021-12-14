// Escrever uma função que receba um array e um valor
// e retorne o index de onde se encontra o valor.
// Caso o valor nao exista no array, retornar - 1.

function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100)