

describe('LoginPage', () => {

  beforeEach(() => cy.visit('/'));
  
  it('should perform login and navigate to home screen', () => {
    cy.findByPlaceholderText(/email/i, { exact: false })
      .should('exist')
      .type('test@iteriam.com')
      .should('have.value', 'test@iteriam.com');

    cy.findByPlaceholderText(/contraseña/i)
      .should('exist')
      .type('123456')
      .should('have.value', '123456');

    cy.findByRole('button', { name: /Acceder/i }).should('exist');
    cy.findByRole('button', { name: /Acceder/i }).click();

    cy.url().should('include', 'home');
  });

  it('should fail login and and raise toast componet with bad credentials message', () => {
    cy.findByPlaceholderText(/email/i, { exact: false })
      .should('exist')
      .type('test@iteriam.com')
      .should('have.value', 'test@iteriam.com');

    cy.findByPlaceholderText(/contraseña/i)
      .should('exist')
      .type('1234567889')
      .should('have.value', '1234567889');

    cy.findByRole('button', { name: /Acceder/i }).should('exist');
    cy.findByRole('button', { name: /Acceder/i }).click();


    cy.findByRole('toast')
    .should('exist')
    .should('contain.text', 'Usuario o password incorrecto');
  });

  it('should fail email validation and raise toast component with bad formmated email', () => {
    cy.findByPlaceholderText(/email/i, { exact: false })
      .should('exist')
      .type('testiteriam.com')
      .should('have.value', 'testiteriam.com');

    cy.findByPlaceholderText(/contraseña/i)
      .should('exist')
      .type('123456')
      .should('have.value', '123456');

    cy.findByRole('button', { name: /Acceder/i }).should('exist');
    cy.findByRole('button', { name: /Acceder/i }).click();


    cy.findByRole('toast')
    .should('exist')
    .should('contain.text', 'El formato del email no es correcto');
  });

  it('should fail required validation and raise toast component with required validations', () => {
    cy.findByPlaceholderText(/email/i, { exact: false })
      .should('exist')
      .should('have.value', '');

    cy.findByPlaceholderText(/contraseña/i)
      .should('exist')
      .should('have.value', '');

    cy.findByRole('button', { name: /Acceder/i }).should('exist');
    cy.findByRole('button', { name: /Acceder/i }).click();


    cy.findByRole('toast')
    .should('exist')
    .should('contain.text', 'El campo email es obligatorio')
    .should('contain.text', 'El campo contraseña es obligatorio');
  });

  it('should fail password validation and raise toast component with minimun length required', () => {
    cy.findByPlaceholderText(/email/i, { exact: false })
      .should('exist')
      .type('test@iteriam.com')
      .should('have.value', 'test@iteriam.com');

    cy.findByPlaceholderText(/contraseña/i)
      .should('exist')
      .type('12')
      .should('have.value', '12');

    cy.findByRole('button', { name: /Acceder/i }).should('exist');
    cy.findByRole('button', { name: /Acceder/i }).click();


    cy.findByRole('toast')
    .should('exist')
    .should('contain.text', 'El campo contraseña debe ser mayor de 5 caracteres');
  });
});
