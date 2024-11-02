const productsButton = {
    selector: 'a[href="/products"]',
    text: 'Products'
};

const productsPageTitle = {
    selector: '.title',
    text: 'All Products'
};

const loggedInMessage = {
    selector: ':nth-child(10) > a',
    text: 'Logged in as'
};

const cartButton = {
    selector: '.shop-menu > .nav > :nth-child(3) > a'
};

export const mainPageElements = {
    productsButton,
    productsPageTitle,
    loggedInMessage,
    cartButton
};