const { validAnagram } = require("./anagrama")

describe('should return true if the strings are a anagram', () => {
    it('should be true', () => {
        const string1 = 'alegria'
        const string2 = 'galeria'
        const expectedResult = true
        const receivedResult = validAnagram(string1, string2)

        expect(receivedResult).toBe(expectedResult)
    })

    it('should be false', () => {
        const string1 = 'alegria'
        const string2 = 'padaria'
        const expectedResult = false
        const receivedResult = validAnagram(string1, string2)

        expect(receivedResult).toBe(expectedResult)
    })
})