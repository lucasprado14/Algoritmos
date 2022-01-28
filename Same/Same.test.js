const { same } = require("./Same")

describe('should return true if the second array is the first squared', () => {
    it('should return true', () => {

        const array1 = [1, 2, 3]
        const array2 = [4, 1, 9]
        const expectedResult = true
        const receivedResult = same(array1, array2)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return false', () => {

        const array1 = [1, 2, 3]
        const array2 = [2, 1, 9]
        const expectedResult = false
        const receivedResult = same(array1, array2)

        expect(receivedResult).toBe(expectedResult)
    })

})