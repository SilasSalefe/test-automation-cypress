describe('Testes do Carrinho - SauceDemo', () => {
  
  beforeEach(() => {
    cy.fixture('users').then((user) => {
      cy.visit('https://www.saucedemo.com');
      cy.get('[data-test="username"]').type(user.username);
      cy.get('[data-test="password"]').type(user.password);
      cy.get('[data-test="login-button"]').click();
    });
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 1);
  });

  it('Deve remover um produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_item').should('not.exist');
  });

});
