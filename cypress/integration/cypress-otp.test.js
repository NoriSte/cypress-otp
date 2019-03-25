/// <reference types="Cypress" />

context('Tests', () => {
  it('The OTP token generation should work', () => {
    // go to the baseUrl page (see cypress.json)
    cy.visit("/");

    cy.get(".otp-secret.bash").invoke('text').then(secret => {
      cy.get("[data-tab-id=\"verify\"] a").click();
      cy.task("generateOTP", secret).then(token => {
        cy.get("input.otp-verify-input").type(token);
        cy.get(".button.otp-verify-send").click();
        cy.get(".otp-verify-result").contains("Verified token");
      });
    });
  });

  it('The last OTP secret shuold be used if not passed everytime', () => {
    // go to the baseUrl page (see cypress.json)
    cy.visit("/");

    cy.get(".otp-secret.bash").invoke('text').then(secret => {
      cy.get("[data-tab-id=\"verify\"] a").click();
      cy.task("generateOTP", secret);
      cy.task("generateOTP").then(token => {
        cy.get("input.otp-verify-input").type(token);
        cy.get(".button.otp-verify-send").click();
        cy.get(".otp-verify-result").contains("Verified token");
      });
    });
  });
})
