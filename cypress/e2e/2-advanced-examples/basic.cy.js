/// <reference types = "cypress"/>

let syncTitle

describe('Escreve o log', () => {
    it('log...', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().then(($macabro) => {
            console.log($macabro)
            cy.get('#formNome').type($macabro)
            syncTitle = $macabro
        })
    })
})

describe('toto', () => {
    it('todo', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#elementosForm\\:sugestoes').then(($newElemento) => {
            $newElemento.val(syncTitle)
        })
    })
})

describe('toto2', () => {
    it('todo2', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formSobrenome').then(($newElemento2) => {
            cy.wrap($newElemento2).type(syncTitle)
        })
    })
})





