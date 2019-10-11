/// <reference types="Cypress" />

context('Waiting', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/waiting')
  })
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  it('cy.wait() - wait for a specific amount of time', () => {
    cy.get('.wait-input1').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input2').type('Wait 1000ms after typing')
    cy.wait(1000)
    cy.get('.wait-input3').type('Wait 1000ms after typing')
    cy.wait(1000)
  })
<<<<<<< HEAD
  console.log('KWOTA', this.admin.zipper_kwota_val);
  console.log('KWOTA', this.admin.zipper_kwota_val);
  console.log('KWOTA', this.admin.zipper_kwota_val);
  console.log('KWOTA', this.admin.zipper_kwota_val);
  console.log('KWOTA', this.admin.zipper_kwota_val);
  
=======

>>>>>>> parent of 6b312d1... Merge pull request #2 from arturkowalczyk1/feature/new-test-branch
  it('cy.wait() - wait for a specific route', () => {
    cy.server()

    // Listen to GET to comments/1
    cy.route('GET', 'comments/*').as('getComment')

    // we have code that gets a comment when
    // the button is clicked in scripts.js
    cy.get('.network-btn').click()

    // wait for GET comments/1
    cy.wait('@getComment').its('status').should('eq', 200)
  })

})
