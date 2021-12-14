const { quadrado, soma2 } = require("./função")
jest.mock('./soma')
const { soma } = require("./soma")

describe('find all the unique values', () => {

    it('should find de value 2', () => {

        // 1) preparação dos dados
        const x = 1
        const y = 2
        const expectedResult = 25


        // 2) colocar as expectativas nos mocks

        soma.mockReturnValue(5)

        // 3) execução
        const receivedResult = quadrado(x, y)

        // 4) asserção
        expect(receivedResult).toBe(expectedResult)

        // 5)verificar expectativas (só verificar para mocks)

        expect(soma).toHaveBeenCalledWith(x, x)
        expect(soma).toHaveBeenCalledWith(y, y)
        expect(soma).toHaveBeenCalledTimes(2)
    })
})