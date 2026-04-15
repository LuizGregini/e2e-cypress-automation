/// <reference types = "cypress"/>

describe('Agrupador de Assertivas...', () => {
    it('Assertiva 1', () => {
        const numero = 10
        expect(numero).equal(10);
    })
    it('Assertiva 2', () => {
        const numero = 20
        expect(numero).equal(11);
    })
    it('Assertiva 3', () => {
        const numero = 30
        expect(numero).be.to.null;
    })
})