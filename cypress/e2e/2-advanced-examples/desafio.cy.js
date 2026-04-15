/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})    

describe('Desafio', () => {
    it('Validando Cadastro', () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar', {timeout: 10000}).click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')    
        })
        cy.get('#formNome').type('Luiz')
        cy.get('#formCadastrar', {timeout: 10000}).click().then(() => {
            expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')    
        })
        cy.get('#formSobrenome').type('Gustavo')
        cy.get('#formCadastrar', {timeout: 10000}).click().then(() => {
            expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')    
        })
        cy.get('#formSexoMasc'). click()
        cy.get('#formCadastrar'). click()
        cy.get('#resultado > :nth-child(1)').contains('Cadastrado!')
    })
})