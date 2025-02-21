describe('Testes de Login - SauceDemo', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

});
