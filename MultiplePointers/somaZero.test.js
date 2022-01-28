const { somaZero } = require("./somaZero")

describe('should find the first two numbers that resul in 0 when sum', () => {
    it('should find [-3,3]', () => {
        const numbersArray = [-4, -3, -2, -1, 0, 1, 2, 3, 10]
        const expectedResult = [-3, 3]
        const receivedResult = somaZero(numbersArray)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

    it('should find [-4,4]', () => {
        const numbersArray = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 10]
        const expectedResult = [-4, 4]
        const receivedResult = somaZero(numbersArray)

        expect(receivedResult).toStrictEqual(expectedResult)
    })
})