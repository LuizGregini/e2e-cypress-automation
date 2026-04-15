/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Fixture files', () => {
    it('Tests with fixture files', function () {
        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name=formSexo][value='${this.usuario.sexo}']`).click()
            cy.get(`[name=formComidaFavorita][value='${this.usuario.comidafavorita}']`).click()
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get('#formEsportes').select(this.usuario.esportes)
            cy.get('#formCadastrar').click()
            //cy.get('#resultado').contains('Cadastrado!').as("Cliente cadastrado com Sucesso!")
            cy.get('#resultado').should('contain', 'Cadastrado!').as("Cliente cadastrado com Sucesso!")
        })    
    })
})