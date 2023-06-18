export const addToCart = () => {
  //click to the product block
  cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
    .should("be.visible")
    .click();

  cy.url().should("include", "prod.html");

  // click to the 'Add to cart' button
  cy.get("#tbodyid a.btn-success").click();
};
