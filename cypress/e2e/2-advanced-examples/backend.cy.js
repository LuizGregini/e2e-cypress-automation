/// <reference types = "cypress"/>

let myToken;
let idConta
const data = new Date().toLocaleDateString()

before(() => {
    cy.getToken('nikinha@teste.com', 'neymar123')
        .then(tkn => {
            myToken = tkn
            cy.resetCount(myToken)
        })
})

describe('Request', () => {
    it('Request de Criar uma nova Conta', () => {
        cy.request({
            method: 'POST',
            url: '/contas',
            headers: { 
                Authorization: `JWT ${myToken}`
            },
            body: {
                nome: "Teste do caco i"
            }                
        }).as('responseInsertConta')
        .then(resposta => {
            console.log('response')
            idConta = resposta.body.id
            console.log(idConta)
            expect(resposta.status).to.be.equal(201)
            expect(resposta.body).to.have.property('id')
            expect(resposta.body).to.have.property('nome', 'Teste do caco i')
        })
    })   
})

describe('Request', () => {
    it('Request para alterar uma Conta', () => {
        cy.request({
            method: 'PUT',
            url: `/contas/${idConta}`,
            headers: { 
                Authorization: `JWT ${myToken}`
            },
            body: {
                nome: "Teste do caco i alterado"
            }                
        }).as('responseUpdateConta')
        .then(resposta => {
            expect(resposta.status).be.equal(200)
            expect(resposta.body).to.have.property('id')
            expect(resposta.body).to.have.property('nome', 'Teste do caco i alterado')
        })
    })   
})

describe('Request', () => {
    it('Request uma Conta com o mesmo nome já existente', () => {
        cy.request({
            method: 'POST',
            url: '/contas', 
            headers: { 
                Authorization: `JWT ${myToken}`
            },
            body: {
                nome: "Teste do caco i alterado"
            },
            failOnStatusCode: false              
        }).as('responseJaExistente')
        .then(resposta => {
            expect(resposta.status).be.equal(400)
        })
    })   
})

describe('Request', () => {
    it('Request para criar uma nova Movimentação', () => {
        cy.request({
            method: 'POST',
            url: '/transacoes', 
            headers: { 
                Authorization: `JWT ${myToken}`
            },
            body: {
                conta_id: idConta,
                data_pagamento: data,
                data_transacao: data,
                descricao: "Inserindo uma nova movimentação begin",
                envolvido: "Interessado",
                status: true,
                tipo: "REC",
                valor: "13.33"
            }         
        }).as('responseNovaMovimentacao')
        .then(resposta => {
            expect(resposta.status).be.equal(201)
        })
    })   
})

describe('Request', () => {
    it('Request para validar um Saldo Existente', () => {
        cy.request({
            method: 'GET',
            url: '/saldo', 
            headers: { 
                Authorization: `JWT ${myToken}`
            }        
        }).as('responseValidaSaldo')
        .then(resposta => {
            console.log("teste" + resposta)
            let saldoconta = null
            let nomeConta = null
            resposta.body.forEach(conta => {
                if(conta.conta === 'Teste do caco i alterado'){
                    saldoconta = conta.saldoconta
                    nomeConta = conta.nome
                }
            })
            expect(resposta.body.nome).be.equal('Teste do caco i alterado')
            expect(saldoconta).to.be.equal('13.33')
        })
    })   
})
