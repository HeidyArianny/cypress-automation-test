import { placeOrderProcess } from '../../pageObjects/actions/payment-actions';
import { completeRegisterForm, logout } from '../../pageObjects/actions/register-and-login-actions';
import {
  addToCart,
  goToProductsPage,
  itemSelection,
  proceedToCheckout
} from '../../pageObjects/actions/checkout-flow-actions';

describe('Checkout User Flow - Web', () => {
  beforeEach(() => {
    // Tests in the web viewport specified in cypress.config.js
    cy.viewport(Cypress.env('webWidth'), Cypress.env('webHeight'));
    // Visits the defined default url
    cy.visit(Cypress.env('baseUrl'));
  });

  it('TC-01 Add to Cart and Checkout - Web', () => {
    goToProductsPage();
    itemSelection();
    addToCart();
    proceedToCheckout();
    completeRegisterForm('webTest');
    placeOrderProcess();
    logout();
  });
});

describe('Checkout User Flow - Mobile', () => {
  beforeEach(() => {
    // Tests in the mobile viewport specified in cypress.config.js
    cy.viewport(Cypress.env('mobileWidth'), Cypress.env('mobileHeight'));
    cy.visit(Cypress.env('baseUrl'));
  });

  it('TC-01 Add to Cart and Checkout - Mobile', () => {
    goToProductsPage();
    itemSelection();
    addToCart();
    proceedToCheckout();
    completeRegisterForm('mobileTest');
    placeOrderProcess();
    logout();
  });
});

describe('Checkout User Flow - Desktop', () => {
  beforeEach(() => {
    // Tests in the desktop viewport specified in cypress.config.js
    cy.viewport(Cypress.env('desktopWidth'), Cypress.env('desktopHeight'));
    cy.visit(Cypress.env('baseUrl'));
  });

  it('TC-01 Add to Cart and Checkout - Desktop', () => {
    goToProductsPage();
    itemSelection();
    addToCart();
    proceedToCheckout();
    completeRegisterForm('desktopTest');
    placeOrderProcess();
    logout();
  });
});