// adding a product to the cart

import { addToCart } from "../support/utils/addToCart";

describe("demoblaze.add_a_product_to_the cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("tests successful adding a phone to the cart", () => {
    cy.get(".list-group > a:nth-child(2)").click();

    // save product name to productName var
    cy.xpath(
      '(//div[@class="card-block"])[1]//a[contains(@class, "hrefch")]'
    ).as("productName");

    addToCart();

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

  it("tests successful adding a laptop to the cart", () => {
    cy.get(".list-group > a:nth-child(3)").click();

    // save product name to productName var
    cy.xpath(
      '(//div[@class="card-block"])[1]//a[contains(@class, "hrefch")]'
    ).as("productName");

    addToCart();

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

  it("tests successful adding a monitor to the cart", () => {
    cy.get(".list-group > a:nth-child(3)").click();

    // save product name to productName var
    cy.xpath(
      '(//div[@class="card-block"])[1]//a[contains(@class, "hrefch")]'
    ).as("productName");

    addToCart();

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
