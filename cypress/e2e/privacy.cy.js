Cypress._.times(3, function() {
    it('testa a página da política de privacidade de forma independente', function(){
        cy.visit('./src/privacy.html')
    
        cy.contains('Política de privacidade').should('be.visible')
    })
})
