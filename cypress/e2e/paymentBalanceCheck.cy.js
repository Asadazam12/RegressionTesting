describe('Payment Balance Check Form', () => {
  // New test case for demo site login
  it('should login successfully on demo site', () => {
    cy.visit('http://www.stealmylogin.com/demo.html');
    cy.get('input[name="username"]').type('demo_user'); // Replace with actual username
    cy.get('input[name="password"]').type('demo_pass'); // Replace with actual password
    cy.get('input[type="submit"]').click();
    cy.url().should('include', 'https://example.com'); // Verify redirect to submission URL
    cy.get('body').should('contain', 'Login Successful'); // Verify login success (adjust based on actual response)




});