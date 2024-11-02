import { websiteInfo } from '../../support/inputData';

const products = {
    selector: 'a[href^="/product_details"]',
};

const productInfo = {
    selector: '.product-information',
    productNameText: 'Sleeveless Dress',
    availabilityText: 'Availability: In Stock',
    itemPriceText: 'Rs. 1000'
};

const quantityBox = {
    selector: '#quantity',
    text: websiteInfo.randomData.itemQuantity
};

const addToCartButton = {
    selector: 'button[type="button"].btn.btn-default.cart',
    text: 'Add to cart'
};

export const productsPageElements = {
    products
};

export const productsDetailsElements = {
    productInfo,
    addToCartButton,
    quantityBox
};

export const assertions = [
    { selector: productInfo.selector, text: productInfo.availabilityText },
    { selector: productInfo.selector, text: productInfo.itemPriceText }
];