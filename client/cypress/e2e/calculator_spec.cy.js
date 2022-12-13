describe('Testing all operands', () => {
  it('user can carry out any operand', () => {
    cy.visit('http://localhost:3000');
    //choose first operand
    cy.findByRole('button', { name: /10/i }).click()
    //choose operation
    cy.findByRole('button', { name: /\+/i }).click()
    // cy.findByRole('button', { name: /\*/i }).click()
    // cy.findByRole('button', { name: /\//i }).click()
    // cy.findByRole('button', { name: /\-/i }).click()

    //choose second operand
    cy.findByRole('button', { name: /2/i }).click()

    //calculate
    cy.findByRole('button', { name: /=/i }).click()
  })
})