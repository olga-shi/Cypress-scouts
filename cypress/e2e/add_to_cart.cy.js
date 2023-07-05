// adding a product to the cart from different categories

import { addToCart } from "../support/utils/addToCart";

describe("demoblaze.add_a_product_to_the cart", () => {
  beforeEach(() => {
    // Request declaration
    cy.visit("/");
    cy.intercept("POST", "/bycat").as("category");
    cy.intercept("POST", "/view").as("viewCart");
  });

  it("tests successful adding a phone to the cart", () => {
    //go to the mobile phones category
    cy.get(".list-group > a:nth-child(2)").should("be.visible").click();
    // wait category loading
    cy.wait("@category");

    // save product name to productName alias
    cy.contains('.hrefch', 'Samsung galaxy s6')
    .should("be.visible")
    .as("productName");
    // add product to the cart
    addToCart("Samsung galaxy s6");

    // click to the 'Cart' button
    cy.get("#navbarExample ul.navbar-nav li:nth-child(4) #cartur").click();

    // wait cart loading
    cy.wait("@viewCart");

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

    // wait category loading
    cy.wait("@category");

    // save product name to productName alias
    cy.contains('.hrefch', 'Sony vaio i5')
    .should("be.visible")
    .as("productName");
    // add product to the cart
    addToCart("Sony vaio i5");

    // click to the 'Cart' button
    cy.get("#navbarExample ul.navbar-nav li:nth-child(4) #cartur").click();

    // wait cart loading

    cy.wait("@viewCart");

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
    cy.get(".list-group > a:nth-child(4)").should("be.visible")
    .click();

    // wait category loading
    cy.wait("@category");

    // save product name to productName alias
    cy.contains('.hrefch', 'Apple monitor 24')
      .should("be.visible")
      .as("productName");

      
    // add product to the cart
    addToCart('Apple monitor 24');

    // click to the 'Cart' button
    cy.get("#navbarExample ul.navbar-nav li:nth-child(4) #cartur").click();
    // wait cart loading
    cy.wait("@viewCart");

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
