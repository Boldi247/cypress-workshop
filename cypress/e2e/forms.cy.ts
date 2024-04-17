describe("Learning Path Section 2 - Input fields, forms", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("should save an employee and send the form", () => {
    cy.get('[data-cy="name-input"]').type("David Smith");
    cy.get('[data-cy="email-input"]').type("davidsmith@gmail.com");
    cy.get('[data-cy="date-input"]').type("1998-04-18");
    cy.get('[data-cy="send-button"]').click();

    cy.get('[data-cy="response"]').should("contain.text", "David Smith");
    cy.get('[data-cy="response"]').should(
      "contain.text",
      "davidsmith@gmail.com"
    );
    cy.get('[data-cy="response"]').should("contain.text", "1998-04-18");
  });
});
