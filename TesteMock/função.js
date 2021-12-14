const { soma } = require("./soma")

function quadrado(x, y) {
    return (soma(x, x) * soma(y, y));
}

function soma2(x, y) {
    return (soma(x, y) + quadrado(x, y));
}

module.exports = { quadrado, soma2 };
