export const addToCart = () => {
  //click to the product block
  cy.xpath(
    '(//div[@class="card-block"] )[1]//a[contains(@class, "hrefch")]'
  ).click();

  cy.url().should("include", "prod.html");

  // click to the 'Add to cart' button
  cy.xpath(
    '//a[contains(@class, "btn-success")] [contains(., "Add to cart")]'
  ).click();
};
