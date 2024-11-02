import { registerElements } from "../elements/register-and-login-elements";
import { fillTextFields } from "./actions-helper";

export function completeRegisterForm() {
    cy.get(registerElements.registerForm.selector)
      .should('be.visible');
    // Completes the first step of the Register process by filling the name and email address fields
    fillTextFields(registerElements.registerInputs);
    clickSignupButton();
    // Completes the Account Information form
    cy.get(registerElements.accountInfoName.selector)
      .invoke('val')
      .should('not.be.empty');
    cy.get(registerElements.accountInfoEmailAddress.selector)
      .invoke('val')
      .should('not.be.empty');
      fillTextFields(registerElements.accountInputs);
      fillTextFields(registerElements.addressInputs);
    cy.get(registerElements.country.selector)
      .select(registerElements.country.text)
      .should('have.value', 'United States');
    clickCreateAccountButton();
    clickContinueButton();
}

// Clicks the Signup button
function clickSignupButton() {
    cy.get(registerElements.signupButton.selector)
      .should('be.enabled', 'contain.text', 'Signup')
      .click();
}

// Clicks the Create Account button
function clickCreateAccountButton() {
    cy.get(registerElements.createAccountButton.selector)
      .should('be.enabled', 'contain.text', 'Create Account')
      .click();
    // Asserts the account was created
    cy.get(registerElements.accountCreatedNotification.selector)
      .should('be.visible', 'contain.text', 'Account Created!');
}

function clickContinueButton() {
    cy.get(registerElements.continueButton.selector)
      .should('be.visible', 'contain.text', 'Continue')
      .click();
}