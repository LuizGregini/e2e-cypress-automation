/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})

beforeEach(() => {
    cy.reload()
})

const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

describe('Comida', () => {
    foods.forEach(food =>{
        it(`Teste com a Comida Favorita: ${food}`, () => {
            cy.get('#formNome').type('Nikinha')
            cy.get('#formSobrenome').type('Bika')
            cy.get(`[name=formSexo][value='M'`).click()
            cy.xpath(`//label[contains(text(),'${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Superior')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            //cy.get('#resultado').contains('Cadastrado!').as("Cliente cadastrado com Sucesso!")
            cy.get('#resultado').should('contain', 'Cadastrado!').as("Cliente cadastrado com Sucesso!")
        })
    })
})

describe('ComidaEach', () => {
    foods.forEach(food =>{
        it.only(`Teste com a Comida Favorita Each: ${food}`, () => {
            cy.get('#formNome').type('Nikinha')
            cy.get('#formSobrenome').type('Bika')
            cy.get(`[name=formSexo][value='M'`).click()
            cy.get('[name=formComidaFavorita]').each($el => {
                if($el.val() != 'vegetariano')
                    cy.wrap($el).click()
            })
            cy.get('#formEscolaridade').select('Superior')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            //cy.get('#resultado').contains('Cadastrado!').as("Cliente cadastrado com Sucesso!")
            //cy.get('#resultado').should('contain', 'Cadastrado!').as("Cliente cadastrado com Sucesso!")
        })
    })
})