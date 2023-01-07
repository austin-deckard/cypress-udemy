/// <reference types="Cypress" />
describe("Test contact us form via WebDriverUni", () => {
  it("should be able to submit a successful submissions via contact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.get('[name="first_name"]').type("James");
    cy.get('[name="last_name"]').type("Bond");
    cy.get('[name="email"]').type("007@email.com");
    cy.get("textarea.feedback-input").type("hello darling");

    cy.get('[type="submit"]').click();
  });
});
