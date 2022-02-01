const { power } = require("./power")

describe('should mimic the functionality of Math.pow()', () => {
    it('should return 4', () => {
        const base = 2
        const exponent = 2
        const expectedResult = 4
        const receivedResult = power(base, exponent)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 16', () => {
        const base = 2
        const exponent = 4
        const expectedResult = 16
        const receivedResult = power(base, exponent)

        expect(receivedResult).toBe(expectedResult)
    })
})