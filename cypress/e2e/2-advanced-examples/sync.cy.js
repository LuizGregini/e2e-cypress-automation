/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

describe('Sync', () => {
    it('Testando Sync', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist')
    })
})


describe('Lista', () => {
    it('Listar os itens', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li span').should('exist', 'Item 1')
        cy.get('#lista li span').should('exist', 'Item 2')
    })
})


describe('Lista DOM', () => {
    it('Listar os itens DOM', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('exist', 'Item 1')
        cy.get('#lista li')
            .find('span')
            .should('exist', 'Item 2')
    })
})

describe('TimeOut', () => {
    it('Usando TimeOut', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
    })
})

describe('Lista DOM', () => {
    it('Listar os itens DOM', () => {
        cy.get('#buttonListDOM').click()
        //cy.wait(1000)
        cy.get('#lista li span', {timeout: 20000})
            .should('have.length', 1)
            .should('have.length', 2)
    })
})

describe('Retry', () => {
    it('Clique Retry', () => {
        cy.get('#buttonCount').click()
        cy.get('#buttonCount').click()
        cy.get('#buttonCount', {timeout: 10000})
            .should('have.value', '1111')
        //cy.wait(4000)
        //cy.get('#buttonCount')
            //.should('have.value', '111')
    })
})


describe('Should x Then', () => {
    it('A', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').debug()
    })
})


describe('then', () => {
    it('then', () => {
        // valor do botão = 1
        cy.get('#buttonCount').click() // clica no botão => valor 11
        cy.get('#buttonCount').click() // clica no botão => valor 111
        cy.get('#buttonCount').then(($elemento) => {
            expect($elemento).to.have.length(111)
        })
    })
})

describe('should', () => {
    it.only('should', () => {
        cy.get('#buttonCount').click() // clica no botão => valor 11
        cy.get('#buttonCount').click() // clica no botão => valor 111
        cy.get('#buttonCount', {timeout: 5000})
            .should('have.value', '111')
    })
})