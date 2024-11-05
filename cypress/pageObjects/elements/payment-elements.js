import { websiteInfo } from '../../support/inputData';

const nameOnCard = {
  selector: '[data-qa="name-on-card"]',
  text: websiteInfo.randomData.nameOnCard
};

const cardNumber = {
  selector: '[data-qa="card-number"]',
  text: websiteInfo.randomData.cardNumber
};

const cvc = {
  selector: '[data-qa="cvc"]',
  text: websiteInfo.randomData.cvc
};

const expirationMonth = {
  selector: '[data-qa="expiry-month"]',
  text: websiteInfo.randomData.expirationMonth
};

const expirationYear = {
  selector: '[data-qa="expiry-year"]',
  text: websiteInfo.randomData.expirationYear
};

const payOrderButton = {
  selector: '[data-qa="pay-button"]',
};

const orderPlacedNotification = {
  selector: '[data-qa="order-placed"] > b'
};

const paymentInputs = {
  nameOnCard,
  cardNumber,
  cvc,
  expirationMonth,
  expirationYear
};

export const paymentElements = {
  payOrderButton,
  paymentInputs,
  orderPlacedNotification
};