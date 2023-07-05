export const addToCart = (product) => {
  // click to the product block
  cy.contains('.hrefch', product)
    .should("be.visible");
   
    cy.contains('.hrefch', product)
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
