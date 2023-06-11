// adding a product to the cart

describe("demoblaze.add_a_product_to_the cart", () => {
  it("tests successful adding a product to the cart", () => {
    //go to the main page
    cy.visit("/index.html");

    // save product name to productName var
    cy.xpath(
      '(//div[@class="card-block"])[1]//a[contains(@class, "hrefch")]'
    ).as("productName");

    //click to the product block
    cy.xpath(
      '(//div[@class="card-block"] )[1]//a[contains(@class, "hrefch")]'
    ).click();

    // click to the 'Add to cart' button
    cy.xpath(
      '//a[contains(@class, "btn-success")] [contains(., "Add to cart")]'
    ).click();

    // click to the 'Cart' button
    cy.xpath('//a[@class="nav-link" and @id="cartur"]').click();

    // make sure we go to the cart page
    cy.location("href").should("include", "/cart.html");

    // make sure that our product is in the cart
    cy.xpath('//tr[contains(@class, "success")]/td[contains(., *)][2]')
      .should("be.visible")
      .then(($cartItem) => {
        cy.get("@productName").then((productName) => {
          expect($cartItem.text()).to.equal(productName.text());
        });
      });
  });
});
