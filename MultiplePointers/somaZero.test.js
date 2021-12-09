const { somaZero } = require("./somaZero")

describe('soma', () => {
    it('soma', () => {
        expect(somaZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])).toStrictEqual([-3, 3])
    })
})