describe("Learning path 1", () => {
  beforeEach(() => {
    cy.visit("/locators");
  });

  it("selectors", () => {
    cy.get("button#button-with-id").click();
    cy.get("button.button-with-classname").click();
    cy.get('[data-cy="button-data-cy"]').click();
    cy.get("button").contains("Button with content").click();
  });
});
