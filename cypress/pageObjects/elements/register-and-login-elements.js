import { faker } from '@faker-js/faker';
import { websiteInfo } from '../../support/inputData';

const registerForm = {
  selector: '.signup-form'
};

const webName = {
  selector: '[data-qa="signup-name"]',
  text: websiteInfo.randomData.firstName // Use of faker to generate a random name
};

// Element created as a function so Cypress can enter a unique email for each viewport
export const webEmailAddress = () => {
  return {
    selector: '[data-qa="signup-email"]',
    text: faker.internet.email().toLowerCase()
  };
};

const mobileName = {
  selector: '[data-qa="signup-name"]',
  text: 'User'
};

export const mobileEmailAddress = () => {
  return {
    selector: '[data-qa="signup-email"]',
    text: faker.internet.email().toLowerCase()
  };
};

const desktopName = {
  selector: '[data-qa="signup-name"]',
  text: websiteInfo.randomData.firstName
};

export const desktopEmailAddress = () => {
  return {
    selector: '[data-qa="signup-email"]',
    text: faker.internet.email().toLowerCase()
  };
};

const signupButton = {
  selector: '[data-qa="signup-button"]'
};

const webRegisterInputs = {
  webName
};

const mobileRegisterInputs = {
  mobileName
};

const desktopRegisterInputs = {
  desktopName
};

const accountInfoName = {
  selector: '[data-qa="name"]'
};

const accountInfoEmailAddress = {
  selector: '[data-qa="email"]'
};

const accountInfoPassword = {
  selector: '[data-qa="password"]',
  text: websiteInfo.randomData.password
};

const accountInputs = {
  accountInfoPassword
};

const firstName = {
  selector: '[data-qa="first_name"]',
  text: websiteInfo.randomData.firstName
};

const lastName = {
  selector: '[data-qa="last_name"]',
  text: websiteInfo.randomData.lastName
};

const address = {
  selector: '[data-qa="address"]',
  text: websiteInfo.randomData.address
};

const country = {
  selector: '[data-qa="country"]',
  text: 'United States'
};

const state = {
  selector: '[data-qa="state"]',
  text: websiteInfo.randomData.state
};

const city = {
  selector: '[data-qa="city"]',
  text: websiteInfo.randomData.city
};

const zipCode = {
  selector: '[data-qa="zipcode"]',
  text: websiteInfo.randomData.zipCode
};

const phoneNumber = {
  selector: '[data-qa="mobile_number"]',
  text: websiteInfo.randomData.phoneNumber
};

const createAccountButton = {
  selector: '[data-qa="create-account"]'
};

const accountCreatedNotification = {
  selector: '[data-qa="account-created"]'
};

const continueButton = {
  selector: '[data-qa="continue-button"]'
};

const logoutButton = {
  selector: '.nav > :nth-child(4) > a'
};

const addressInputs = {
  firstName,
  lastName,
  address,
  state,
  city,
  zipCode,
  phoneNumber
};

export const registerElements = {
  registerForm,
  webRegisterInputs,
  mobileRegisterInputs,
  desktopRegisterInputs,
  signupButton,
  accountInfoName,
  accountInfoEmailAddress,
  accountInputs,
  addressInputs,
  country,
  createAccountButton,
  accountCreatedNotification,
  continueButton,
  logoutButton
};