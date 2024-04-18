describe("Local Storage and Session Storage testing", () => {
  beforeEach(() => {
    cy.visit("/localstorage");
  });

  it("should set and get lcoal storage", () => {
    cy.get('[data-cy="localstorage-control"]').then(($controls) => {
      cy.wrap($controls).find("input").type("Hello World!");
      cy.wrap($controls).find("button").click();
    });
    cy.getLocalStorage("text").should("eq", "Hello World!");
    cy.window().then((win) => {
      const s_storage = win.sessionStorage.getItem("text");
      cy.wrap(s_storage).should("eq", "Hello World!");
    });
  });
});
