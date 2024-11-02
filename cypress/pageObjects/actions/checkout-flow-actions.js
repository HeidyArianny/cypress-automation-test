import { cartElements } from '../elements/cart-elements';
import { mainPageElements } from '../elements/main-page-elements';
import { checkoutAssertions, checkoutDetailsElements } from '../elements/checkout-page-elements';
import { addToCartModalAssertions, modalsElements, checkoutModalAssertions } from '../elements/modals-elements';
import { assertions, productsDetailsElements, productsPageElements } from '../elements/products-page-elements';

// Navigates to the Products page
export function goToProductsPage() {
    cy.get(mainPageElements.productsButton.selector)
      .should('contain.text', mainPageElements.productsButton.text)
      .click();
    cy.get(mainPageElements.productsPageTitle.selector)
      .should('contain.text', mainPageElements.productsPageTitle.text);
}

// Selects de third item
export function itemSelection() {
    cy.get(productsPageElements.products.selector)
      .eq(2).click();

    cy.get(productsDetailsElements.productInfo.selector)
        .should('contain.text', productsDetailsElements.productInfo.productNameText)

    assertions.forEach(({ selector, text }) => {
        cy.get(selector).should('contain.text', text);
    });
}

// Add to cart process
export function addToCart() {
    // Adds a random quantity
    cy.get(productsDetailsElements.quantityBox.selector)
      .clear()
      .type(productsDetailsElements.quantityBox.text);
    // Adds the item to the shopping cart
    cy.get(productsDetailsElements.addToCartButton.selector)
      .should('contain.text', productsDetailsElements.addToCartButton.text)
      .click();
    // Asserts that the item was added successfully
    addToCartModalAssertions.forEach(({ selector, text }) => {
        cy.get(selector).should('contain.text', text);
    });
    // Goes to the cart to assert added product is there
    cy.get(modalsElements.viewCartButton.selector)
      .should('contain.text', 'View Cart')
      .eq(1)
      .click();
    shoppingCartItems();
}

// Asserts the shopping cart has items
export function shoppingCartItems() {
  cy.get(cartElements.itemRow.selector)
      .should('not.be.empty');
}

export function clickProceedToCheckoutButton() {
  // Clicks the Proceed to checkout button in the shopping cart
  cy.get(cartElements.proceedToCheckoutButton.selector)
  .should('be.visible', 'contain.text', 'Proceed to checkout')
  .click();
}

// Checkout process
export function proceedToCheckout() {
  clickProceedToCheckoutButton();
    // Asserts the right modal is displayed
    checkoutModalAssertions.forEach(({ selector, text }) => {
        cy.get(selector).should('contain.text', text);
    });
    // Clicks the Register / Login button
    cy.get(modalsElements.registerOrLoginButton.selector)
      .should('contain.text', 'Register / Login')
      .eq(1)
      .click();
}

// Asserts the checkout page is displayed with its details
export function checkoutDetails() {
  cy.get(checkoutDetailsElements.checkoutDetails.selector)
    .within(() => {
      checkoutAssertions.forEach(({ selector, assertion, text }) => {
        if (text) {
          cy.contains(selector, text).should(assertion);
        } else {
          cy.get(selector).should(assertion);
        }
      });
    });
}

export function clickPlaceOrderButton() {
  cy.get(checkoutDetailsElements.placeOrderButton.selector)
    .should('contain.text', 'Place Order')
    .click();
}