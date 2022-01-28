const { soma } = require("./Algoritmo")

describe('should sum the numbers', () => {
    it('should result 3', () => {

        const num1 = 1
        const num2 = 2
        const expectedResult = 3

        const receivedResult = soma(num1, num2)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should result 25', () => {

        const num1 = 19
        const num2 = 6
        const expectedResult = 25

        const receivedResult = soma(num1, num2)

        expect(receivedResult).toBe(expectedResult)
    })
})