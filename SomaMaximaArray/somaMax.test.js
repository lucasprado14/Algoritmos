const { somaMax } = require("./somaMax")

describe('should find the largest sum of X numbers in sequence', () => {
    it('should find de value 19', () => {
        const numbersArray = [2, 6, 9, 2, 1, 8, 5, 6, 3]
        const x = 3
        const expectResult = 19
        const recivedResult = somaMax(numbersArray, x)

        expect(recivedResult).toBe(expectResult)
    })

    it('should find de value 15', () => {
        const numbersArray = [2, 6, 9, 2, 1, 8, 5, 6, 3]
        const x = 2
        const expectResult = 15
        const recivedResult = somaMax(numbersArray, x)

        expect(recivedResult).toBe(expectResult)
    })

    it('should find de value 4', () => {
        const numbersArray = [1, 1, 1, 1, 1, 1, 1, 1, 1]
        const x = 4
        const expectResult = 4
        const recivedResult = somaMax(numbersArray, x)

        expect(recivedResult).toBe(expectResult)
    })
})