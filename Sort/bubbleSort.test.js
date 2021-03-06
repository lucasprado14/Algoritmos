const { bubbleSort } = require("./bubbleSort")

describe('should sort the array', () => {
    it('should return [1,2,3,4,5,6,7,8]', () => {
        const arr = [8, 1, 2, 3, 4, 5, 6, 7]
        const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8]
        const receivedResult = bubbleSort(arr)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

})