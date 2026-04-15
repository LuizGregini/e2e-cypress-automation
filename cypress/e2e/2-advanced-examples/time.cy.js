/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

beforeEach(() => {
    cy.reload()
})

describe('Clock', () => {
    it.only('Teste de Clock', () => {
    //cy.get('#buttonNow').click()
    //cy.get('#resultado > span').should('contain', '25/09/2025')
    //cy.clock()
    const dt = new Date(2012, 4, 10, 15, 23, 50)
    cy.clock(dt.getTime())
    cy.get('#buttonNow').click()
    cy.get('#resultado > span').should('contain', '10/05/2012')
    })
})