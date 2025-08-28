describe('Payment Balance Check Form', () => {
  beforeEach(() => {
    cy.visit('http://payment.pspa.gop.pk'); // Verify this URL works in CI
    cy.title().should('include', 'Check Available Balance');
  });

  it('should fill and submit the form successfully', () => {
    cy.get('.captchaInstruction').first().invoke('text').then((captchaText) => {
      const captchaNumber = parseInt(captchaText.trim(), 10);
      cy.get('#CNIC').type('1234567890123');
      cy.get('#ContactNumber').type('03001234567');
      cy.get('#captchaInput').type(captchaNumber.toString());
      cy.get('#verifyButton').click();
      cy.get('#loadingSpinner', { timeout: 20000 }).should('be.visible');
      cy.get('#loadingSpinner', { timeout: 20000 }).should('not.exist');
      // Add success assertion if applicable
    });
  });
/*
  it('should show error for invalid CNIC', () => {
    cy.get('.captchaInstruction').first().invoke('text').then((captchaText) => {
      const captchaNumber = parseInt(captchaText.trim(), 10);
      cy.get('#CNIC').type('123');
      cy.get('#ContactNumber').type('03001234567');
      cy.get('#captchaInput').type(captchaNumber.toString());
      cy.get('#verifyButton').click();
      cy.get('#CNIC').should('have.class', 'is-invalid', { timeout: 10000 });
    });
  });

  it('should show error for invalid Contact Number', () => {
    cy.get('.captchaInstruction').first().invoke('text').then((captchaText) => {
      const captchaNumber = parseInt(captchaText.trim(), 10);
      cy.get('#CNIC').type('1234567890123');
      cy.get('#ContactNumber').type('12345');
      cy.get('#captchaInput').type(captchaNumber.toString());
      cy.get('#verifyButton').click();
      cy.get('#ContactNumber').should('have.class', 'is-invalid', { timeout: 10000 });
    }); */
  });
});