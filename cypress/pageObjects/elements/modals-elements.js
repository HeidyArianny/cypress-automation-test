const modalNotification = {
    selector: '.modal-content',
    addedToCartTitle: 'Added!',
    addedToCartSubtitle: 'Your product has been added to cart.',
    viewCartButtonText: 'View Cart',
    checkoutTitle: 'Checkout',
    checkoutSubtitle: 'Register / Login account to proceed on checkout.'
};

const viewCartButton = {
    selector: 'a[href="/view_cart"]',
};

const registerOrLoginButton = {
    selector: 'a[href="/login"]',
};

export const modalsElements = {
    modalNotification,
    viewCartButton,
    registerOrLoginButton
};

export const addToCartModalAssertions = [
    { selector: modalNotification.selector, text: modalNotification.addedToCartTitle },
    { selector: modalNotification.selector, text: modalNotification.addedToCartSubtitle },
    { selector: modalNotification.selector, text:  modalNotification.viewCartButtonText}
];

export const checkoutModalAssertions = [
    { selector: modalNotification.selector, text: modalNotification.checkoutTitle },
    { selector: modalNotification.selector, text: modalNotification.checkoutSubtitle }
];