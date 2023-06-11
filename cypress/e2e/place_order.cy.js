describe("place_order", () => {
  it("tests place_order", () => {
    
    

    //go to the main page
    cy.visit("/index.html");

    // save product price to productName var
    cy.get("#tbodyid > div:nth-child(1) > div > div > h5").then(($link) => {
      // var for product name
      const productPrice = $link.text().substring(1);
      //click to the product block
      cy.get('h4.card-title:nth-child(1) a[href="prod.html?idp_=1"]').click();

      // click to the 'Add to cart' button
      cy.get("div.col-lg-6 a.btn-success").click();

      // click to the 'Cart' button
      cy.get('a[id="cartur"]').click();

      // make sure we go to the cart page
      cy.url().should("include", "/cart.html");

      // make sure that our product is in the cart
      cy.get("#tbodyid > tr > td:nth-child(3)")
        .should("be.visible")
        .then(($cartItem) => {
          expect($cartItem.text()).to.equal(productPrice);
        });

      // click to the 'Place order' button
      cy.get("button.btn-success").click();

      // click to the 'name' field
      cy.get("#name").click();

      // fill field 'Name' with value 'name'
      cy.get("#name").invoke("val", "name");

      // click to the 'Countru' field
      cy.get("#country").click();

      // fill field 'Country' with value 'country'
      cy.get("#country").invoke("val", "country");

      // click to the 'City' field
      cy.get("#city").click();

      // fill field 'City' with value 'city'
      cy.get("#city").invoke("val", "city");

      // click to the 'Credit card' field
      cy.get("#card").click();

      // fill field 'Credit card' with value '1234567891023456'
      cy.get("#card").invoke("val", "1234567891023456");

      // click to the 'Month' field
      cy.get("#month").click();

      // fill field 'Month' with value '12'
      cy.get("#month").invoke("val", "12");

      // click to the 'Year' field
      cy.get("#year").click();

      // fill field 'Year' with value '27'
      cy.get("#year").invoke("val", "27");

      // click to the 'Purchase' button
      cy.get("#orderModal button.btn-primary").click();

      //make sure that finishAlert be visible
      cy.get(" div.sweet-alert.showSweetAlert.visible ").should("be.visible");

      //make sure that price for our product is equal price on the final alert
      cy.get("body > div.sweet-alert.showSweetAlert.visible > p")
        .should("exist")
        .and("be.visible")
        .then(($alertItem) => {
          expect($alertItem).to.contain(productPrice);
        });
    });
  });
});
