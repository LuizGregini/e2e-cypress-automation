/// <reference types = "cypress"/>

beforeEach(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.reload()
})    


describe('Alert', () => {
    it('alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })
    it('alert com mock', () => {
        const stub = cy.stub().as('TESTE')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        }) 
    })
})


describe('Alert confirm', () => {
    it('Mensagem', () => {
        const stubOk = cy.stub().as('Mensagem')
        cy.on('window:confirm', stubOk)
        cy.get('#confirm').click().then(() => {
            expect(stubOk.getCall(0)).to.be.calledWith('Confirm Simples')
        })
    })
    it('alert CANCELAR', () => {
        const stubCancelar = cy.stub().as('OK')
        cy.on('window:alert', stubCancelar)
        cy.get('#confirm').click().then(() => {
            expect(stubCancelar.getCall(0)).to.be.calledWith('Confirmado')
        }) 
    })
    it('Mensagem', () => {
        cy.get('#confirm').click()
        cy.get('#confirm').click().then(() => {
            expect(stubOk.getCall(0)).to.be.calledWith('Confirm Simples')
            
        })
        it('Negado', () => {
        const stubCancelar = cy.stub().as('Negado')
        cy.on('window:alert', stubCancelar)
            
        })
        


        const stubOk = cy.stub().as('Mensagem')
        cy.on('window:confirm', stubOk)
        
    })
    it('Negado', () => {
        const stubCancelar = cy.stub().as('Negado')
        cy.on('window:alert', stubCancelar)
        
        
    })
})

describe('Prompet', () => {
    it.only('Prompet', () => {
        cy.get('#prompt').click()
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })
        cy.get('#confirm').click().then(() => {
            expect(stubOk.getCall(0)).to.be.calledWith('Era 42?')
            
        })
        cy.get('#alert').click().then(() => {
            expect(stubOk.getCall(0)).to.be.calledWith(':D')
        })
    })
})


        
    