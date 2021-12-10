// A função deve receber um numero e imprimir uma contagem regressiva.

function countDown(num) {
    if (num <= 0) {
        console.log("Concluido!")
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// como funciona?
// A ideia de uma "Recursive Function" é que ela chama por ela mesma,
// mas sempre com valoes diferetes.

// exemplo usado o 3 na função acima:
// como é maior que 0, vai imprimir um 3, subtrair 1 do valor, e continuar neste esquema
// até que chegue a 0.
