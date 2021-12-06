const { saame } = require("./Same(2)")

describe('same', () => {
    it('same', () => {
        expect(saame([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])).toBe(true)
    })
})