const { radixSort } = require("./radixSort")

describe('should sort the array', () => {
    it('should return [ 1, 2, 2, 3, 4, 5, 6, 9, 23, 100]', () => {
        const arr = [100, 2, 4, 6, 9, 1, 2, 5, 3, 23]
        const expectedResult = [1, 2, 2, 3, 4, 5, 6, 9, 23, 100]
        const receivedResult = radixSort(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

    it('should return [2,8,26,55,72,100]', () => {
        const arr = [72, 55, 26, 8, 100, 2]
        const expectedResult = [2, 8, 26, 55, 72, 100]
        const receivedResult = radixSort(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

})