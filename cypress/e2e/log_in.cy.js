describe("demoblaze.com_logIn", () => {
  Cypress._.times(3, () => {
    it("successful autorization test", () => {
      cy.visit("/index.html");

      cy.get("#login2").click();

      cy.get("#loginusername").click();

      cy.get("#loginusername").invoke("val", "olgacytest");

      cy.get("#loginpassword").click();

      cy.get("#loginpassword").invoke("val", "cytest");

      cy.get("#logInModal button.btn-primary").click();

      cy.get("#nameofuser").should("contain", "olgacytest");
    });
  });
});
