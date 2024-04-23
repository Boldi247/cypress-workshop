describe("Learning path 3", () => {
  beforeEach(() => {
    cy.visit("/advanced-input-types");
  });

  it("should click on checkbox", () => {
    cy.get("span").contains("Red text").should("have.class", "text-white");
    cy.get('[data-cy="cy-checkbox"]').click();
    cy.get("span").contains("Red text").should("have.class", "text-red-500");
  });

  it("should interact with the dropdown", () => {
    cy.get('[data-cy="cy-select"]').select("BMW");
    cy.get('[data-cy="cy-brand"]').should("include.text", "BMW");
  });
});
