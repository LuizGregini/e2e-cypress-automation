/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Wrapers', () => {
    it('Wrapers', () => {
        // valor do botão = 1
        cy.get('#formNome').then(($elementoWraper) => {
            cy.wrap($elementoWraper).type('mereça')
        })
    })
})