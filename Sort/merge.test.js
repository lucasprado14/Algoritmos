const { merge } = require("./merge")

describe('should merge and sort the array', () => {
    it('should return [1, 2, 3, 5, 6, 100, 200]', () => {
        const arr1 = [100, 200]
        const arr2 = [1, 2, 3, 5, 6]
        const expectedResult = [1, 2, 3, 5, 6, 100, 200]
        const receivedResult = merge(arr1, arr2)

        expect(receivedResult).toStrictEqual(expectedResult)
    })

})