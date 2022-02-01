const { naiveSearch } = require("./naiveStringSearch")

describe('should find a shorter string inside a larger ', () => {
    it('should return 1', () => {
        const longa = 'hello'
        const curta = 'ell'
        const expectedResult = 1
        const receivedResult = naiveSearch(longa, curta)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return 3', () => {
        const longa = 'affbrgbaffbbgfaff'
        const curta = 'aff'
        const expectedResult = 3
        const receivedResult = naiveSearch(longa, curta)

        expect(receivedResult).toBe(expectedResult)
    })
})