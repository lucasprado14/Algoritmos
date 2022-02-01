const { fatorial } = require("./Fatorial")

describe('should return the factorial result', () => {
    it('should return 24', () => {
        const num = 4
        const expectedResult = 24
        const receivedResult = fatorial(num)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 5040', () => {
        const num = 7
        const expectedResult = 5040
        const receivedResult = fatorial(num)

        expect(receivedResult).toBe(expectedResult)
    })
})