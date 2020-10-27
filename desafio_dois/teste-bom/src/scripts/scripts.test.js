const Calculos = require('./calculos')

describe('Calulo prestações e juros', () => {
    it('retorna valor das prestações quando possivel calcular', () => {
        const prestacao = Calculos.calculoPrestacoes( 1000, 0, 4, 3 )

        expect(269.03).toBe( prestacao )
    })
    it('retorna Error quando não possivel calcular', () => {
        const prestacao = Calculos.calculoPrestacoes( 0, 0, 4, 3 )

        expect(false).toBe( prestacao )
    })
})
