Cypress.Commands.add('InsertAnyText', (field, text) => {
    cy.get(field).should('be.visible').fill(text)
  })


Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).should('be.visible').click()

})