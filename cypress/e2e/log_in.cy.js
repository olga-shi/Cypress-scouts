import { login } from "../support/utils/login";

describe("demoblaze.com_logIn", () => {
  beforeEach(() => {
        // Request declaration
    cy.visit("/");
    cy.intercept("POST", "/login").as("login");
  });

  Cypress._.times(1, () => {
    it("successful autorization test", () => {
      login("olgacytest", "cytest");

      cy.wait("@login");

      cy.contains("#nameofuser", "olgacytest").should("be.visible");
    });
  });

  it("faled autorization test", () => {
    login("olgacytest", "cytest1");

    cy.window().then((win) => {
      cy.stub(win, "alert").as("winAlert");

      cy.get("@winAlert").should("be.calledWith", "Wrong password.");
    });
  });
});
