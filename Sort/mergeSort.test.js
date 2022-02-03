const { mergeSort } = require("./mergesort")

describe('should sort the array', () => {
    it('should return [10, 24, 73, 76]', () => {
        const arr = [10, 24, 76, 73]
        const expectedResult = [10, 24, 73, 76]
        const receivedResult = mergeSort(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

    it('should return [2,8,26,55,72,100]', () => {
        const arr = [72, 55, 26, 8, 100, 2]
        const expectedResult = [2, 8, 26, 55, 72, 100]
        const receivedResult = mergeSort(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

})