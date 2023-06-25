// adding a product to the cart from different categories

import { addToCart } from "../support/utils/addToCart";

describe("demoblaze.add_a_product_to_the cart", () => {
  beforeEach(() => {
    // Request declaration
    cy.intercept("POST", "/bycat").as("category");
    cy.visit("/");
  });

  it("tests successful adding a phone to the cart", () => {
    //go to the mobile phones category
    cy.get(".list-group > a:nth-child(2)").should("be.visible").click();

    cy.wait("@category");

    // save product name to productName var
    cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
      .should("be.visible")
      .as("productName");

    addToCart();

    // click to the 'Cart' button
    cy.get("#navbarExample ul.navbar-nav li:nth-child(4) #cartur").click();

    // make sure we go to the cart page
    cy.location("href").should("include", "/cart.html");

    // make sure that our product is in the cart
    cy.get("tr.success td:nth-child(2)")
      .should("be.visible")
      .then(($cartItem) => {
        cy.get("@productName").then((productName) => {
          expect($cartItem.text()).to.equal(productName.text());
        });
      });
  });

  it("tests successful adding a laptop to the cart", () => {
    //go to the laptop category
    cy.get(".list-group > a:nth-child(3)").should("be.visible").click();

    cy.wait("@category");

    // save product name to productName var
    cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
      .should("be.visible")
      .as("productName");

    addToCart();

    // click to the 'Cart' button
    cy.get("#navbarExample ul.navbar-nav li:nth-child(4) #cartur").click();

    // make sure we go to the cart page
    cy.location("href").should("include", "/cart.html");

    // make sure that our product is in the cart
    cy.get("tr.success td:nth-child(2)")
      .should("be.visible")
      .then(($cartItem) => {
        cy.get("@productName").then((productName) => {
          expect($cartItem.text()).to.equal(productName.text());
        });
      });
  });

  it("tests successful adding a monitor to the cart", () => {
    //go to the monitors category
    cy.get(".list-group > a:nth-child(4)").should("be.visible").click();
    cy.wait("@category");
    // save product name to productName var
    cy.get(":nth-child(1) > .card > .card-block > .card-title > .hrefch")
      .should("be.visible")
      .as("productName");

    addToCart();

    // click to the 'Cart' button
    cy.get("#navbarExample ul.navbar-nav li:nth-child(4) #cartur").click();

    // make sure we go to the cart page
    cy.location("href").should("include", "/cart.html");

    // make sure that our product is in the cart
    cy.get("tr.success td:nth-child(2)")
      .should("be.visible")
      .then(($cartItem) => {
        cy.get("@productName").then((productName) => {
          expect($cartItem.text()).to.equal(productName.text());
        });
      });
  });
});
