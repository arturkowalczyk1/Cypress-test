/// <reference types="Cypress" />
describe('Testing  money calc on finances page', function () {
  beforeEach(() => {
    cy.fixture("/users/admin").as("admin");
  });
  it('Check complete caluculate', function () {
    cy.visit('https://finanse.rankomat.pl/kredyty/kalkulator-gotowkowy/');

    cy.get('.singleBox').its('length').then(numLinks => {
      function getOffers() {
        return Math.floor(Math.random() * numLinks);
      }
      var selected = [],
      random;
      for (var i = 0; i < 1; i++) {
        
        random = getOffers();
        while(random == 2) {
          random = getOffers();
        }
        //random = getOffers();
          console.log('Liczba', random);
      }
      selected.push(random);
      console.log('Oferty', numLinks);
      var box = cy.get('.singleBox').eq(random);

      box.click().then(() => {
        box
        .should('have.class', 'active');
      });


    })


    cy.get('#zipper_kwota_val')
    .clear()
    .type(this.admin.zipper_kwota_val)
    .should("have.value", this.admin.zipper_kwota_val);
    console.log('KWOTA', this.admin.zipper_kwota_val);
    cy.get('#zipper_term_val')
    .click()
    .clear()
    .type(this.admin.zipper_term_val)
    .then(elem =>{
      elem.val(this.admin.zipper_term_val);
    })
    .should('have.value', this.admin.zipper_term_val);

    cy.get('select')
    .eq(3)
    .select('To pilne - od zaraz!');
    
    cy.get('select')
    .eq(4)
    .select('Wynajmuję dom/mieszkanie');
    
    cy.get(':nth-child(3) > .col-xs-10 > .input-group > .formInputWithSpanL')
    .click()
    .clear()
    .type(this.admin.rentHome)
    .then(elem =>{
      elem.val(this.admin.rentHome);
    })
    .should('have.value', this.admin.rentHome);

    cy.get(':nth-child(4) > .col-xs-10 > :nth-child(1) > .rank-radio-outer')
    .click()

    cy.get(':nth-child(2) > :nth-child(5) > .col-xs-10 > .input-group > .formInputWithSpanL')
    .click()
    .type(this.admin.loanPayment)
    .then(elem =>{
      elem.val(this.admin.loanPayment);
    })
    .should('have.value', this.admin.loanPayment);

    cy.get(':nth-child(6) > .col-xs-10 > :nth-child(1) > .rank-radio-outer')
    .click()
    cy.get(':nth-child(7) > .col-xs-10 > .input-group > .formInputWithSpanL')
    .click()
    .type(this.admin.cardPayment)
    .then(elem =>{
      elem.val(this.admin.cardPayment);
    })
    .should('have.value', this.admin.cardPayment);

    cy.get(':nth-child(8) > .col-xs-10 > :nth-child(2) > .rank-radio-outer')
    .click()

    cy.get(':nth-child(9) > .col-xs-10 > .input-group > .formInputWithSpanL')
    .click()
    .type(this.admin.monthPayment)
    .then(elem =>{
      elem.val(this.admin.monthPayment);
    })
    .should('have.value', this.admin.monthPayment);

    
    cy.get(':nth-child(10) > :nth-child(2) > .formInput')
    .select('1986');

    cy.get(':nth-child(3) > .formInput')
    .select('3');

    cy.get(':nth-child(4) > .formInput')
    .select('5');

    cy.get(':nth-child(11) > .col-xs-10 > .input-group > .formInputWithSpanL')
    .click()
    .clear()
    .type(this.admin.jobPayment)
    .then(elem =>{
      elem.val(this.admin.jobPayment);
    })
    .should('have.value', this.admin.jobPayment);

    cy.get('.formInputWithSpanR')
    .click({force:true})
    .type(this.admin.phoneNumber)
    .then(elem =>{
      elem.val(this.admin.phoneNumber);
    })
    .should('have.value', this.admin.phoneNumber);

    cy.get(':nth-child(13) > .col-xs-10 > .formInput')
    .select('Umowa o pracę na czas nieokreślony');

    cy.get('.input-group > .formInput')
    .click()
    .type(this.admin.familyMembersNumber)
    .then(elem =>{
      elem.val(this.admin.familyMembersNumber);
    })
    .should('have.value', this.admin.familyMembersNumber);

    cy.get(':nth-child(15) > .col-xs-10 > .formInput')
    .select('Alior Bank');

    cy.get(':nth-child(1) > :nth-child(1) > .rank-radio-outer')
    .click();

    cy.get('#agreementAll')
    .click();

    cy.get('.sendBtn')
    .click({force:true})
    .wait(6000)
    .then(() => {
      cy.location().then((loc) => {
        expect(loc.search).to.eq(this.admin.finalPathCalculateCash);
        //expect(loc.href).to.include(this.admin.finalPathCalculateCash)

      })
    })

  })



})