const { somaMax } = require("./somaMax")

describe('soma', () => {
    it('soma', () => {
        expect(somaMax([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toBe(19)
    })
})