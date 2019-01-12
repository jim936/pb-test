describe('Testing Perkbox Login', () => {
  before(() => {
    cy.visit('https://app.perkbox.com/welcome/login');
  });  

  it('should error when an email is invalid', () => {
	const loginBox = cy.get('#login__global-login__field-email');
  	loginBox.type('perk@perk');

	const actionButton1 = cy.get('#login__global-login__btn-submit');
	actionButton1.click();

	const errorSpan = cy.get('#login__global-login__field-email__copy-error__icon-text').within((el) => {
	const errorMessage = errorSpan.get('div').eq(1);
	errorMessage.contains('This email address is not valid');
	});
});
});