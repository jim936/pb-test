describe('Testing Perkbox Login', () => {
  before(() => {
    cy.visit('https://app.perkbox.com/welcome/login');
  });

  it('should have a functional login', () => {
  	const loginBox = cy.get('#login__global-login__field-email');
  	loginBox.type('pooja@perkbox.com');
  	const actionButton1 = cy.get('#login__global-login__btn-submit');
	actionButton1.click();

  	const pooja = cy.get('#login__global-login__tenant-select__poojatesttenant__tenant');
  	pooja.click();
  	const actionButton2 = cy.get('#login__global-login__tenant-select__btn-submit');
  	actionButton2.click();

  	const emailField = cy.get('#login__default-login__field-email');
  	emailField.should('have.value', 'pooja@perkbox.com');

  });
});
