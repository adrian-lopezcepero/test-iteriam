import { exists } from 'node:fs';


describe('LoginPage', () => {
  const validEmail = 'test@iteriam.com';
  const validPassword = '123456';

  beforeEach(() => cy.visit('/'));

  it('should perform log out and navigate to login screen', () => {
    login(validEmail, validPassword);
    cy.findByText('Log out').should('exist');
    cy.findByText('Log out').click();

    cy.url().should('include', 'login');
  });

  it('should show welcome message with email', () => {
    login(validEmail, validPassword);
    cy.findByText(/welcome/i, { exact: false })
      .should('exist')
      .should('contain.text', 'Welcome home ' + validEmail);
  });

  const login = (email: string, password: string) => {
    cy.findByPlaceholderText(/email/i, { exact: false })
      .should('exist')
      .type(email)
      .should('have.value', email);

    cy.findByPlaceholderText(/contraseña/i)
      .should('exist')
      .type(password)
      .should('have.value', password);

    cy.findByRole('button', { name: /Acceder/i }).should('exist');
    cy.findByRole('button', { name: /Acceder/i }).click();

  };
});
