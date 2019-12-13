describe("Login page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });

  it("can submit login and redirect to dashboard", () => {
    cy.get('input[id="email"]')
      .type("Terry@Wogan.com")
      .should("have.value", "Terry@Wogan.com");

    cy.get('input[id="password"]')
      .type("Pudsey")
      .should("have.value", "Pudsey");

    cy.get("#login").click();

    cy.location("pathname").should("eq", "/dashboard");
  });
});

describe("Dashboard page", () => {
  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });

  it("has a button to logout", () => {
    cy.get(".logout").should("contain", "Logout");
  });
});