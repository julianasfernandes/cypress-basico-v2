Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    const longText = 'Teste teste teste teste teste teste teste teste teste teste teste teste teste'

    cy.get('#firstName').type('Juliana')
    cy.get('#lastName').type('Fernandes')
    cy.get('#email').type('juliana@mail.com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.contains('button', 'Enviar').click()
})