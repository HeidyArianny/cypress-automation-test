import { faker } from '@faker-js/faker';

const randomData = {
  itemQuantity: faker.number.int({ min: 1, max: 20 }), // Generates a random number between 1 and 20
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  password: faker.internet.password(), // Generates a random password
  address: faker.location.streetAddress(), // Generates a random street address (only the street)
  state: faker.location.state(),
  city: faker.location.city(),
  zipCode: faker.location.zipCode(), // Generates a random 'xxxxx-xxxx' format zip code
  phoneNumber: faker.phone.number({ style: 'national' }), // Generates a random US format phone number
  nameOnCard: faker.person.fullName(), // Generates random first and last names
  cardNumber: faker.finance.creditCardNumber(), // Generates a random credit card number that can be used for testing
  cvc: faker.finance.creditCardCVV(), // Generates a random cvv number that can be used for testing
  expirationMonth: faker.helpers.replaceSymbols('0#').slice(-2), // Generates a random expiration month that can be used for testing, formatted as only 2 digits
  expirationYear: String(new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).slice(-2), // Generates a random expiration year (future) that can be used for testing, formatted as only 2 digits
};

export const websiteInfo = {
  randomData
};