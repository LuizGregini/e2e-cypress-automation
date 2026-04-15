/// <reference types = "cypress"/>

// nikinha@teste.com
// neymar123

import locaters from "../../support/locaters"

const nameCount = 'Biro lilo'
const userLogin = 'nikinha@teste.com'
const userPassword = 'neymar123'
const nomeConta = `Conta Teste ${Date.now()}`
const nomeMovimentacao = `Movimentação Teste ${Date.now()}`
const nomeMovimentacaoEditado = nomeMovimentacao.substring(19)
const min = 20
const max = 1000
const valor = (Math.random() * (max - min) + min).toFixed(2)

beforeEach(() => {
    cy.visit('https://barrigareact.wcaquino.me')
    cy.reload()
})

beforeEach(() => {
    cy.reload()
})

describe('Login', () => {
    it('Realizando login com um Usuário válido', () => {
        cy.realizaLogin(userLogin, userPassword)
        //cy.validaLoginSucesso(nameCount)
    })
})

describe('Nova Conta', () => {
    it('Inserindo uma nova Conta', () => {
        cy.realizaLogin(userLogin, userPassword)
        cy.criaConta(nomeConta)
        cy.novaContaExisteNaListagem(nomeConta)
    })
})


describe('Alterando Conta', () => {
    it('Alterando uma Conta já existente', () => {
        cy.realizaLogin(userLogin, userPassword)
        cy.criaConta(nomeConta)
        cy.novaContaExisteNaListagem(nomeConta)
        cy.alteraConta(nomeConta)       
    })
})


describe('Conta já existente', () => {
    it('Fazer a ação de criar uma nova Conta que já existe', () => {
        cy.realizaLogin(userLogin, userPassword)
        cy.criaConta(nomeConta)
        cy.criaConta(nomeConta)
        cy.get('#toast-container')
        .should('exist').as('alertExiste')
        .and('contain', 'Erro: Error: Request failed with status code 400').as('400BadRequest')
    })
})

describe('Movimentação', () => {
    it('Inserir uma nova Movimentação', () => {
        cy.realizaLogin(userLogin, userPassword)
        cy.criaConta(nomeConta)
        cy.insereMovimentacao(nomeMovimentacao, valor, nomeMovimentacaoEditado, nomeConta)
    }) 
})


describe('Saldo', () => {
    it.only('Calculando o Saldo de uma Conta já existente', () => {
        cy.realizaLogin(userLogin, userPassword)
        cy.criaConta(nomeConta)
        cy.insereMovimentacao(nomeMovimentacao, valor, nomeMovimentacaoEditado, nomeConta)
        cy.validaSaldoContaExistente(nomeConta, nomeConta, valor)
    }) 
})


describe('Movimentação', () => {
    it('Remover Movimentação', () => {
        cy.realizaLogin(userLogin, userPassword)
        cy.criaConta(nomeConta)
        cy.insereMovimentacao(nomeMovimentacao, valor, nomeMovimentacaoEditado, nomeConta)
        cy.removeMovimentacao(nomeMovimentacao)
    }) 
})








//geraDataAtualDeAmanha


// << receita
// >> despesa

// PAGA OU NAO