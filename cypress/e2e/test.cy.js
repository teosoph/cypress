describe("Cypress test", () => {
  beforeEach("Open page", async () => {
    await cy.visit("https://telnyx.com/sign-up");
  });

  it("Check test email registration posibility", async () => {
    await cy.get('button[aria-label="close and deny"]').click();
    await cy
      .get('input[type="email"]')
      .type("test@test.com")
      .type("{enter}")
      .should("have.value", "test@test.com");

    cy.contains("button[type='submit']", "Create Account").should("be.visible");
  });
});
