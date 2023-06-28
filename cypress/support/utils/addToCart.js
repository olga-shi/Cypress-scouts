export const addToCart = () => {
  // click to the product block
  cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
    .should("be.visible")
    .click();
  // make shure we are on the product page
  cy.url().should("include", "prod.html");

  // intercept addtocart request
  cy.intercept("POST", "/addtocart").as("addToCart");
  // click to the 'Add to cart' button
  cy.get("#tbodyid a.btn-success").click();
  // wait addToCart request
  cy.wait("@addToCart");
};
