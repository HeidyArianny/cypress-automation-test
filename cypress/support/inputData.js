import { faker } from '@faker-js/faker';

const randomData = {
    itemQuantity: faker.number.int({ min: 1, max: 20 }), // Generates a random number between 1 and 20
    firstName: faker.person.firstName(), // Generates a random name
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password(),
    address: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    phoneNumber: faker.phone.number({ style: 'national' }),
    nameOnCard: faker.person.fullName(),
    cardNumber: faker.finance.creditCardNumber(),
    cvc: faker.finance.creditCardCVV(),
    expirationMonth: faker.helpers.replaceSymbols('0#').slice(-2),
    expirationYear: String(new Date().getFullYear() + faker.number.int({ min: 1, max: 5 })).slice(-2),
};

export const websiteInfo = {
    randomData
};