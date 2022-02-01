const { collectOddValues } = require("./helperMethod")

describe('should find the odd numbers', () => {
    it('should return [1,3,7]', () => {
        const arr = [1, 2, 3, 4, 6, 7, 8]
        const expectedResult = [1, 3, 7]
        const receivedResult = collectOddValues(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

    it('should return [3,7,9,9]', () => {
        const arr = [2, 3, 4, 4, 6, 7, 8, 9, 9]
        const expectedResult = [3, 7, 9, 9]
        const receivedResult = collectOddValues(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })
})