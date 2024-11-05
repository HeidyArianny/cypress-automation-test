import { mainPageElements } from '../elements/main-page-elements';
import { paymentElements } from '../elements/payment-elements';
import { fillTextFields } from './actions-helper';
import {
  checkoutDetails,
  clickPlaceOrderButton,
  clickProceedToCheckoutButton,
  shoppingCartItems
} from './checkout-flow-actions';

function completePaymentForm() {
  fillTextFields(paymentElements.paymentInputs);
}

function clickPayAndConfirmButton() {
  cy.get(paymentElements.payOrderButton.selector)
    .should('be.visible', 'contain.text', 'Pay and Confirm Order')
    .click();
}

// Asserts the order was placed successfully
function orderPlacedNotification() {
  cy.get(paymentElements.orderPlacedNotification.selector)
    .should('have.text', 'Order Placed!');
}

// Place order full process
export function placeOrderProcess() {
  // Validates the user is logged in
  cy.get(mainPageElements.loggedInMessage.selector)
    .should('be.visible', 'contain.text', mainPageElements.loggedInMessage.text);
  // Navigates to the Shopping Cart page
  cy.get(mainPageElements.cartButton.selector)
    .should('contain.text', 'Cart')
    .click();
  shoppingCartItems();
  clickProceedToCheckoutButton();
  checkoutDetails();
  clickPlaceOrderButton();
  completePaymentForm();
  clickPayAndConfirmButton();
  orderPlacedNotification();
}