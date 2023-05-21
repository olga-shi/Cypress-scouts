describe("demoblaze.com_logIn", () => {
  it("successful autorization test", () => {
    
    cy.visit("https://www.demoblaze.com/index.html");
    
    cy.get("#login2").click();
    
    cy.get("#loginusername").click();
    
    cy.get("#loginusername").invoke("val","olgacytest");
    
    cy.get("#loginpassword").click();
    
    cy.get("#loginpassword").invoke("val","cytest");
    
    cy.get("#logInModal button.btn-primary").click();

    cy.get("#nameofuser")
        .should("contain", "olgacytest")
  })
})