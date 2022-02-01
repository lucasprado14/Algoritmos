const { sameFrequency } = require("./sameFrequency")

describe('should return true if theumbers have the same frequency', () => {
    it('should return true', () => {
        const num1 = 234
        const num2 = 423
        const expectedResult = true
        const receivedResult = sameFrequency(num1, num2)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should be false', () => {
        const num1 = 145
        const num2 = 254
        const expectedResult = false
        const receivedResult = sameFrequency(num1, num2)

        expect(receivedResult).toBe(expectedResult)
    })
})