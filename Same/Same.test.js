const { same } = require("./Same")

describe('same', () => {
    it('same', () => {
        expect(same([1, 2, 3], [4, 1, 9])).toBe(true)
    })
})