// criar uma função que receba um array e um numero x, ela deve reusltar na maior soma de
// x numeros em sequenia.

// ex.: [1,2,2,5,6], 2 deve resultar em 11

function somaMax(arr, num) {
    let max = 0
    let temporario = 0
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    temporario = max;
    for (let i = num; i < arr.length; i++) {
        temporario = temporario - arr[i - num] + arr[i];
        max = Math.max(max, temporario);
    }
    return max;
}
module.exports = { somaMax }
// somaMax([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)