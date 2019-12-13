describe("Register page", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });

  it("can submit registration and redirect to login", () => {

    cy.get('input[id="name"]')
      .type("Terry Wogan")
      .should("have.value", "Terry Wogan");

    cy.get('input[id="email"]')
      .type("Terry@Wogan.com")
      .should("have.value", "Terry@Wogan.com");

    cy.get('input[id="password"]')
      .type("Pudsey")
      .should("have.value", "Pudsey");

    cy.get('input[id="password2"]')
      .type("Pudsey")
      .should("have.value", "Pudsey");

    cy.get("#register").click();

    cy.location('pathname').should('eq', '/login');
  });
});