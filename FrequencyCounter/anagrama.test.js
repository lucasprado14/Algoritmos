const { validAnagram } = require("./anagrama")

describe('anagrama', () => {
    it('anagrama', () => {
        expect(validAnagram('alegria', 'galeria')).toBe(true)
    })
})