const { reverse } = require("./reverseString")

describe('should return the reverse of a string', () => {
    it('should return emosewa', () => {
        const str = 'awesome'
        const expectedResult = 'emosewa'
        const receivedResult = reverse(str)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should return loohcsmhtir', () => {
        const str = 'rithmschool'
        const expectedResult = 'loohcsmhtir'
        const receivedResult = reverse(str)

        expect(receivedResult).toBe(expectedResult)
    })
})