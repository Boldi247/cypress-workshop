describe("Learning Path Section 3 - Advanced Input Types", () => {
  beforeEach(() => {
    cy.visit("/advanced-input-types");
  });

  it("should test the checkbox", () => {
    cy.get('input[type="checkbox"]').click();
    cy.get("span").contains("Red text").should("have.class", "text-red-500");
  });

  it("should test the dropdown", () => {
    cy.get("select").select("BMW");
    cy.get('[data-cy="brand"]').should("contain.text", "BMW");
  });

  it("should test the slider", () => {
    cy.get('input[type="range"]')
      .eq(0)
      .then(($el) => {
        cy.wrap($el)
          .invoke("val", 75)
          .trigger("change", { force: true })
          .invoke("attr", "value", 75);
      });
  });
});
