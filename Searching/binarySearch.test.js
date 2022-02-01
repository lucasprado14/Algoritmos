const { binarySearch } = require("./binarySearch")

describe('should return the index at which the value exists. Otherwise, return 1', () => {
    it('should return 1', () => {
        const arr = [1, 2, 3, 4, 5]
        const elem = 2
        const expectedResult = 1
        const receivedResult = binarySearch(arr, elem)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 2', () => {
        const arr = [1, 2, 3, 4, 5]
        const elem = 3
        const expectedResult = 2
        const receivedResult = binarySearch(arr, elem)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 4', () => {
        const arr = [1, 2, 3, 4, 5]
        const elem = 5
        const expectedResult = 4
        const receivedResult = binarySearch(arr, elem)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return -1', () => {
        const arr = [1, 2, 3, 4, 5]
        const elem = 6
        const expectedResult = -1
        const receivedResult = binarySearch(arr, elem)

        expect(receivedResult).toBe(expectedResult)
    })
})