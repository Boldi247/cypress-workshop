describe("Learning path 2", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("should fill the form", () => {
    cy.get('[data-cy="name-input"]').type("David");
    cy.get('[data-cy="email-input"]').type("david@email.com");
    cy.get('[data-cy="birth-input"]').type("1990-01-01");

    cy.get('[data-cy="send-button"]').click();

    cy.get('[data-cy="response"]').then(($pageElement) => {
      cy.wrap($pageElement).should("contain.text", "David");
      cy.wrap($pageElement).should("contain.text", "david@email.com");
      cy.wrap($pageElement).should("contain.text", "1990-01-01");
    });
  });
});
