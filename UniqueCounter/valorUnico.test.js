const { contadorValorUnico } = require("./valorUnico")

describe('same', () => {
    it('same', () => {
        expect(contadorValorUnico([1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7])).toBe(7)
    })
})