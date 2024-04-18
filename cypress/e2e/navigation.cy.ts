import { indexOf } from "node_modules/cypress/types/lodash";

interface PageTestDefinition {
  header: string;
  url: string;
}

const pages: PageTestDefinition[] = [
  {
    header: "What Are Locators?",
    url: "/locators",
  },
  {
    header: "Input fields, forms",
    url: "/forms",
  },
  {
    header: "Advanced Input Types",
    url: "/advanced-input-types",
  },
  {
    header: "Localstorage, sessionstorage testing",
    url: "/localstorage",
  },
];

describe("Section 0 - Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should test navigation of learning paths", () => {
    pages.forEach((page, idx) => {
      cy.get('[data-cy="learning-paths"]').children().eq(idx).click();
      cy.url().should("include", page.url);
      cy.get("h1.text-2xl").should("contain.text", page.header);
      cy.homePageFromNavbar();
    });
  });
});
