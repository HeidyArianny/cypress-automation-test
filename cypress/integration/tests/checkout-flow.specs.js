import { completeRegisterForm } from '../../pageObjects/actions/register-and-login-actions';
import { placeOrderProcess } from '../../pageObjects/actions/payment-actions';
import {
    addToCart,
    goToProductsPage,
    itemSelection,
    proceedToCheckout
} from '../../pageObjects/actions/checkout-flow-actions';

const viewports = [
    { label: 'Web', width: Cypress.env('webWidth'), height: Cypress.env('webHeight') },
    { label: 'Desktop', width: Cypress.env('desktopWidth'), height: Cypress.env('desktopHeight') },
    { label: 'Mobile', width: Cypress.env('mobileWidth'), height: Cypress.env('mobileHeight') },
];

context('Checkout User Flow', () => {
    viewports.forEach(viewport => {
        context(`Viewport: ${viewport.label}`, () => {
            beforeEach(() => {
                cy.visit(Cypress.env('baseUrl'));
                cy.viewport(viewport.width, viewport.height);
            });

            it(`TC-01 Add to Cart and Checkout - ${viewport.label}`, () => {
                goToProductsPage();
                itemSelection();
                addToCart();
                proceedToCheckout();
                completeRegisterForm();
                placeOrderProcess();
            });
        });
    });
});