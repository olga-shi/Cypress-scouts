export const login = (username, password) => {
    cy.get("#login2").click();

    cy.get("#loginusername").invoke("val", username);

    cy.get("#loginpassword").invoke("val", password);

    cy.get("#logInModal button.btn-primary").click();

  }