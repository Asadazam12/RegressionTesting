describe('Payment Balance Check Form', () => {
  beforeEach(() => {
    cy.visit('http://payment.pspa.gop.pk'); // Update with your local or deployed URL
    cy.title().should('include', 'Check Available Balance'); // Verify page load
  });

  it('should fill and submit the form successfully', () => {
    // Get the random CAPTCHA number
    cy.get('.captchaInstruction').first().invoke('text').then((captchaText) => {
      const captchaNumber = parseInt(captchaText.trim(), 10); // Extract the number (e.g., 8)

      // Fill the form
      cy.get('#CNIC').type('1234567890123'); // 13-digit CNIC
      cy.get('#ContactNumber').type('03001234567'); // 11-digit contact number
      cy.get('#captchaInput').type(captchaNumber.toString()); // Use the dynamic CAPTCHA number

      // Submit and verify
      cy.get('#verifyButton').click();
      cy.get('#loadingSpinner', { timeout: 10000 }).should('be.visible');
      cy.get('#loadingSpinner', { timeout: 10000 }).should('not.exist');
      // Add assertion for success (e.g., cy.contains('Success message')) if applicable
    });
  });

  it('should show error for invalid CNIC', () => {
    // Get the random CAPTCHA number
    cy.get('.captchaInstruction').first().invoke('text').then((captchaText) => {
      const captchaNumber = parseInt(captchaText.trim(), 10); // Extract the number

      // Fill with invalid CNIC
      cy.get('#CNIC').type('123'); // Invalid CNIC (less than 13 digits)
      cy.get('#ContactNumber').type('03001234567'); // Valid contact for context
      cy.get('#captchaInput').type(captchaNumber.toString()); // Use the dynamic CAPTCHA number

      // Submit and verify error
      cy.get('#verifyButton').click();
      cy.get('#CNIC').should('have.class', 'is-invalid'); // Check for validation error
      // Or check for an error message: cy.contains('Invalid CNIC');
    });
  });

  it('should show error for invalid Contact Number', () => {
    // Get the random CAPTCHA number
    cy.get('.captchaInstruction').first().invoke('text').then((captchaText) => {
      const captchaNumber = parseInt(captchaText.trim(), 10); // Extract the number

      // Fill with invalid Contact Number
      cy.get('#CNIC').type('1234567890123'); // Valid CNIC for context
      cy.get('#ContactNumber').type('12345'); // Invalid Contact (less than 11 digits)
      cy.get('#captchaInput').type(captchaNumber.toString()); // Use the dynamic CAPTCHA number

      // Submit and verify error
      cy.get('#verifyButton').click();
      cy.get('#ContactNumber').should('have.class', 'is-invalid'); // Check for validation error
      // Or check for an error message: cy.contains('Invalid Contact Number');
    });
  });
});