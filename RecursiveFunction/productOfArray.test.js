const { productOfArray } = require("./productOfArray")

describe('should return the product of all numers', () => {
    it('should return 6', () => {
        const arr = [1, 2, 3]
        const expectedResult = 6
        const receivedResult = productOfArray(arr)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 60', () => {
        const arr = [1, 2, 3, 10]
        const expectedResult = 60
        const receivedResult = productOfArray(arr)

        expect(receivedResult).toBe(expectedResult)
    })
})