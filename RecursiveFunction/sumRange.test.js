const { sumRange } = require("./sumRange")

describe('should return the factorial result', () => {
    it('should return 6', () => {
        const num = 3
        const expectedResult = 6
        const receivedResult = sumRange(num)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 28', () => {
        const num = 7
        const expectedResult = 28
        const receivedResult = sumRange(num)

        expect(receivedResult).toBe(expectedResult)
    })
})