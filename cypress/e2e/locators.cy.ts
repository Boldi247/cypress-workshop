describe("Learning Path Section 1 - Locators", () => {
  beforeEach(() => {
    cy.visit("/locators");
  });

  it('should locate and click "Button with ID"', () => {
    cy.get("#button-with-id").click();
  });

  it('should locate and click "Button with classname"', () => {
    cy.get(".button-with-classname").click();
  });

  it('should locate and click "Button with data-cy attribute"', () => {
    cy.get('[data-cy="button-data-cy"]').click();
  });

  it('should locate and click "Button with content"', () => {
    cy.get("button").contains("Button with content").click();
  });
});
