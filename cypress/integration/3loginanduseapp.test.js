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

  it("can add a holiday and creates a holiday dashboard", () => {
    cy.get('input[name="startDate"]')
      .type("2020-02-20")
      .should("have.value", "2020-02-20");

    cy.get('input[name="endDate"]')
      .type("2020-03-01")
      .should("have.value", "2020-03-01");

    cy.get('input[name="location"]')
      .type("Kiev")
      .should("have.value", "Kiev");

    cy.get("#submit").click();

    cy.location("pathname").should("eq", "/dashboard");
  });
});
