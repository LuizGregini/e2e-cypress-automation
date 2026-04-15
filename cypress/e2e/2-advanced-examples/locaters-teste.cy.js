/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Lista DOM', () => {
    it('Listar os itens DOM', () => {
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) input').click()
        cy.get('[onclick*="Francisco"]').click()
        cy.xpath('//input[contains(@onclick, "Francisco")]')
            .click().type('lelek')
    })
})

