describe('Escreve o log', () => {
    it('log...', () => {
        cy.visit('https://learn.eltngl.com/')
        cy.get('.sc-on95c4-4 > .sc-1mm77jg-6').click()
        cy.get('.sc-i1czt3-0 > .sc-1ydyjcn-0 > .sc-1ydyjcn-1 > .sc-1ydyjcn-2 > .sc-1ydyjcn-6 > .rectangle-sign-in')
            .click()
        cy.get('[name="identifier"]')
            .click()
            .type('testeLogin')
        cy.get('[name="password"]')
            .click()
            .type('testePassword')
        cy.get('.sc-1mm77jg-0').click()
    })
})

describe.only('Escreve o log', () => {
    it('log...', () => {
        cy.visit('https://learn.eltngl.com/')
        cy.get('#buttonListDOM').click()
        cy.get('.sc-on95c4-4 > .sc-1mm77jg-6').click()
        cy.xpath('//*[@id="LandingPagePoster-react-component-0e100b9c-3d4d-4bf3-8ec4-73475ea4a816"]/div/div[2]/div/div/div[4]/button[1]', {timeout: 20000}).click()
    })
})


//*[@id="modals-root"]/div/div[2]/div/div/div/div/form/div[3]/div/div/div/input[2]


//*[@id="page-home"]/div[5]

//*[@id="LandingPagePoster-react-component-0e100b9c-3d4d-4bf3-8ec4-73475ea4a816"]/div/div[2]/div/div/div[4]/button[1]