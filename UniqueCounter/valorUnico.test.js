const { contadorValorUnico } = require("./valorUnico")

describe('find all the unique values', () => {
    it('should find de value 7', () => {
        // 1) preparação dos dados utilizados no teste
        const numbersArray = [1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7]
        const expectedResult = 7

        // 2) execução 
        const receivedResult = contadorValorUnico(numbersArray)

        // 3) fase de acerssão
        expect(receivedResult).toBe(expectedResult)
    })

    it('should find de value 2', () => {

        const numbersArray = [1, 1, 1, 1, 2]
        const expectedResult = 2
        const receivedResult = contadorValorUnico(numbersArray)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should find de value 0', () => {

        const numbersArray = []
        const expectedResult = 0
        const receivedResult = contadorValorUnico(numbersArray)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should find de value 4', () => {

        const numbersArray = [-2, -1, -1, 0, 1]
        const expectedResult = 4
        const receivedResult = contadorValorUnico(numbersArray)

        expect(receivedResult).toBe(expectedResult)
    })

})