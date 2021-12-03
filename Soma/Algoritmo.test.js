const {soma} = require("./Algoritmo")

describe('somar', () => {
    it ('soma', () =>{
        expect(soma(1,2)).toBe(3)
    })
})