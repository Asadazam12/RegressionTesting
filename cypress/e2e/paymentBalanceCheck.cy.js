describe('Payment Balance Check Form', () => {
  // New test case for demo site login
  it('should login successfully on demo site', () => {
    cy.visit('http://www.stealmylogin.com/demo.html');
    cy.get('body').should('contain', 'Test with a dummy username and password');

    // Enter username and password (replace with actual credentials)
    cy.get('input[name="username"]').type('demo_user'); // Placeholder, update with valid username
    cy.get('input[name="password"]').type('demo_pass'); // Placeholder, update with valid password

    // Click the login button
    cy.get('input[type="submit"]').click();
  });
});