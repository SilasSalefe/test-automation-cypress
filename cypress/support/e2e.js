import './commands'; 
Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Erro capturado:', err);
  return false;
});
