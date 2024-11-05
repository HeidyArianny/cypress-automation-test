// The goal of this function is to help create a cleaner code in the functions files
export function fillTextFields(elements, useSecondaryText = false) {
  Object
    .entries(elements)
    .forEach(([, value]) => {
      cy.get(value.selector)
        .clear()
        .type(`{selectall}${useSecondaryText ? value.text2 : value.text}`, { delay: 100 })
        .should('have.value', `${useSecondaryText ? value.text2 : value.text}`);
    });
}