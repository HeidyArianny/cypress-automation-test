const checkoutDetails = {
    selector: '#cart_items > .container'
};

const deliveryAddress = {
    selector: '#address_delivery'
};

const addressInvoice = {
    selector: '#address_invoice'
};

const totalAmount = {
    selector: '.cart_total_price'
};

const placeOrderButton = {
    selector: 'a.btn.btn-default.check_out'
};

export const checkoutDetailsElements = {
    checkoutDetails,
    deliveryAddress,
    addressInvoice,
    totalAmount,
    placeOrderButton
};

export const checkoutAssertions = [
    { selector: checkoutDetailsElements.deliveryAddress.selector, assertion: 'exist' },
    { selector: checkoutDetailsElements.addressInvoice.selector, assertion: 'exist' },
    { selector: 'h2', text: 'Review Your Order', assertion: 'exist' },
    { selector: checkoutDetailsElements.totalAmount.selector, assertion: 'exist' },
    { selector: checkoutDetailsElements.placeOrderButton.selector, assertion: 'be.visible' },
];