// The goal of this function is to help get a cleaner code
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