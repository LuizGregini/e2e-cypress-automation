/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('IFrame', () =>{
    it('', () =>{
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('alou')
        })
    })
})