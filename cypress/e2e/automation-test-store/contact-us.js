/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test contact us form via Automation Test Store", () => {
  it("Should be able to submit a successful submissions via contact us form", () => {
    cy.visit("https://www.automationteststore.com");
    cy.get("a[href$='contact']").click();
    cy.get("#ContactUsFrm_first_name").type("Austin");
    cy.get("#ContactUsFrm_email").type("Deckard@gmail.com");
    cy.get("#ContactUsFrm_enquiry").type("I'd like to enquire");
    cy.get("button[title='Submit']").click();
  });
});
