// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from "./locaters"

Cypress.Commands.add('realizaLogin', (email, senha) => {
    cy.visit('https://barrigareact.wcaquino.me')
    cy.get(loc.LOGIN.USER).type(email)
    cy.get(loc.LOGIN.PASSWORD).type(senha)
    cy.get(loc.LOGIN.BTN_LOGIN)
        .contains('Entrar')
        .click()
    cy.get(loc.MESSAGE)
        .should('exist').as('containerExiste')
        .and('contain', 'Bem vindo, Biro lilo!')
    cy.get('.toast-close-button').click()
})

//Cypress.Commands.add('validaLoginSucesso', (usuario) => {
//  cy.get(loc.MESSAGE)
//    .should('exist').as('containerExiste')
//    .and('contain', `Bem vindo, ${usuario}!`)
//  cy.get('.toast-close-button').click()
//})


Cypress.Commands.add('criaConta', (nomeConta) => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.COUNT).click()
    cy.get(loc.COUNT.NAME_COUNT).type(nomeConta)
    cy.contains(loc.COUNT.BTN_SAVE, 'Salvar').click()
    cy.get(loc.MESSAGE)
        .should('exist').as('alertExiste')
        .and('contain', 'Conta inserida com sucesso!').as('novaContaCriada')
})


Cypress.Commands.add('alteraConta', (nomeConta) => {
    cy.contains('span', `Editar ${nomeConta}`).click({force: true})
    cy.get('[data-test="nome"]').type('_UPDATE')
    cy.contains('.btn.btn-primary.btn-block', 'Salvar').click()
    cy.novaContaExisteNaListagem(nomeConta+'_UPDATE')
    cy.get('#toast-container')
        .should('exist').as('alertExiste')
        .and('contain', 'Conta atualizada com sucesso!').as('nomeContaAlterada')    
})

Cypress.Commands.add('insereMovimentacao', (nameMovimentacao, value, nameMovimentacaoEdit, nameCont) => {
        cy.get('[data-test="menu-movimentacao"]').click()
        cy.geraDataAtual().then((data) => {
            cy.get('[data-test="data-transacao"]').type(data)
        })
        cy.geraDataAtualDeAmanha().then((data) => {
            cy.get('[data-test="data-pagamento"]').click().type(data)
        })
        cy.get('#descricao').click().type(nameMovimentacao)
        cy.get('[data-test="valor"]').type(value)
        cy.get('[data-test="envolvido"]').type(nameMovimentacaoEdit)
        cy.get('[data-test="conta"]').select(nameCont)
        cy.get('[data-test="status"]').click()
        cy.get('[data-test="tipo-despesa"]')
        cy.get('i[title="Despesa"]').click()
        cy.get('.btn.btn-block.btn-primary').click()
        cy.get('#toast-container')
            .should('exist').as('alertExiste')
            .and('contain', 'Movimentação inserida com sucesso!').as('novaMovimentacaoCriada') 
})


Cypress.Commands.add('validaSaldoContaExistente', (nameCont, nameCont2, value) => {
    cy.get('[data-test="menu-home"]').click()
    cy.contains(nameCont).should('be.visible').as('Movimentacao_esta_na_listagem')
    cy.get('table').contains('tr', nameCont2).find('td').contains(value.replace('.', ',')).should('exist')
})


Cypress.Commands.add('removeMovimentacao', (nameMovimentacao) => {
    cy.contains('li[data-test="mov-row"]', nameMovimentacao)
        .find('i.far.fa-trash-alt')
        .click()
    cy.get('#toast-container')
        .should('exist')
        .and('contain', 'Movimentação removida com sucesso!').as('movimentacaoRemovida')
})


Cypress.Commands.add('novaContaExisteNaListagem', (nomeConta) => {
    cy.contains('td', nomeConta)
            .should('have.text', nomeConta)
            .as('contaEstaNaListagem')
})


Cypress.Commands.add('geraDataAtual', () => {
    const dateNow = new Date()
    const day = String(dateNow.getDate()).padStart(2, '0')
    const month = String(dateNow.getMonth() + 1).padStart(2, '0')
    const year = dateNow.getFullYear()
    const resultado = `${year}-${month}-${day}`
    return cy.wrap(resultado)
})

Cypress.Commands.add('geraDataAtualDeAmanha', () => {
    const dateNow = new Date()
    dateNow.setDate(dateNow.getDate() + 10)
    const day = String(dateNow.getDate()).padStart(2, '0')
    const month = String(dateNow.getMonth() + 1).padStart(2, '0')
    const year = dateNow.getFullYear()
    const resultado = `${year}-${month}-${day}`
    return cy.wrap(resultado)
})

Cypress.Commands.add('getToken', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: usuario,
            redirecionar: false,
            senha: senha
        }
    }).its('body.token').should('not.be.empty')
    .then(token => {
        return token
    })
})

Cypress.Commands.add('resetCount', (token) => {
    cy.request({
        method: 'GET',
        url: '/reset',
        headers: { 
            Authorization: `JWT ${token}`
        },           
    }).its('status').should('to.be.equal', 200)
})