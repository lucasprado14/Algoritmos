const { saame } = require("./Same(2)")

describe('should return true if the second array is the first squared', () => {
    it('should return true', () => {

        const array1 = [1, 2, 3, 2, 5]
        const array2 = [9, 1, 4, 4, 25]
        const expectedResult = true
        const receivedResult = saame(array1, array2)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return false', () => {

        const array1 = [1, 2, 3, 2, 5]
        const array2 = [9, 1, 4, 4, 24]
        const expectedResult = false
        const receivedResult = saame(array1, array2)

        expect(receivedResult).toBe(expectedResult)
    })
})