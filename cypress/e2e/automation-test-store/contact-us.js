/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Test contact us form via Automation Test Store", () => {
  it("Should be able to submit a successful submissions via contact us form", () => {
    cy.visit("https://www.automationteststore.com");
    cy.url().should("include", "automationteststore");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "A place to practice your automation skills!");
    cy.get("a[href$='contact']").click();
    cy.get("#ContactUsFrm_first_name").type("Austin");
    cy.get("#ContactUsFrm_email").type("Deckard@gmail.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type("I'd like to enquire");
    cy.get("button[title='Submit']").click();
    cy.get("p");
  });
});
