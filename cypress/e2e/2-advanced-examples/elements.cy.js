/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Teste de Texto', () => {
    it('Descobrindo se um texto contém na página', () => {
        cy.get('body').should('contain', 'Popup2')
        //cy.get('span').should('contain', 'Cuidado')
        cy.get('[href="./frame.html"]').should('have.text', 'Popup2')

    })
})    

describe('Links', () => {
    it('Acessando um Link', () => {
        //cy.contains('a', 'Voltar').click()
        cy.contains('a', 'Voltar').should('be.visible').click();
        //cy.get('a').click()
        cy.get('a[onclick="javascript:voltou()"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })
})

describe('TextFields', () => {
    it('NameCamp', () => {
        cy.get('#formNome').type('Luiz Gustavo{enter}')
        cy.get('#formNome').should('have.value', 'Luiz Gustavo')
        cy.get('#formSobrenome').type('Poliani Gregini{enter}')
        cy.get('#formSobrenome').should('have.value', 'Poliani Gregini')
        cy.get('#elementosForm\\:sugestoes').type('SANTOS MAIOR TIME DO MUNDO')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'SANTOS MAIOR TIME DO MUNDO').clear()
        cy.get('#elementosForm\\:sugestoes').type('PELÉ É O MAIOR DE TODOS OS TEMPOS!!')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'PELÉ É O MAIOR DE TODOS OS TEMPOS!!') 
        cy.get('input[type="text"]').eq(2).type('Xico')
        cy.get('input[type="text"]').eq(2).should('have.value', 'Xico')
        cy.get('input[type="text"]').eq(3).type('Vishi Maria')
        cy.get('input[type="text"]').eq(3).should('have.value', 'Vishi Maria') 
        cy.get('input[type="text"]').eq(4).type('Usuário(A)')
        cy.get('input[type="text"]').eq(4).should('have.value', 'Usuário(A)')
        cy.get('input[type="text"]').eq(5).type('Doutorado')
        cy.get('input[type="text"]').eq(5).should('have.value', 'Doutorado')
        cy.get('input[type="text"]').eq(6).type('Usuário(B)')
        cy.get('input[type="text"]').eq(6).should('have.value', 'Usuário(B)')
    })
})

describe('Radio', () => {
    it('Teste de Radio Button', () =>{
        cy.get('#formSexoFem').click().should('to.be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name='formSexo']").should('have.length', 2)
    })
})

describe('Check-Box', () => {
    it('Teste de seleção de Check-box', () => {
        cy.get('#formComidaPizza').click()
        cy.get('#formComidaCarne').click()
        cy.get('#formComidaVegetariana').click()
        cy.get('#formComidaFrango').click()
        cy.get('#formComidaPizza').uncheck()
        cy.get('#formComidaCarne').uncheck()
        cy.get('#formComidaVegetariana').uncheck()
        cy.get('#formComidaFrango').uncheck()
        cy.get('[name="formComidaFavorita"]').click({ multiple: true })
        cy.get('[name="formComidaFavorita"]').should('all.checked')
    })
})


describe('Combo-box', () => {
    it.only('Teste de seleção de Combo-box', () => {
        cy.get('[data-test=dataEscolaridade]')
        .select('superior')
        .should('have.value', 'superior')    
    })
})


describe('Multi Combo-box', () => {
    it.only('Teste de Multi seleção de Combo-box', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['futebol', 'Corrida'])
    })
})

