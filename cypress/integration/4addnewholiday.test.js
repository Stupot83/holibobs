describe("Holiday page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visit("/login");
    
    cy.get('input[id="email"]')
      .type("Terry@Wogan.com")
      .should("have.value", "Terry@Wogan.com");

    cy.get('input[id="password"]')
      .type("Pudsey")
      .should("have.value", "Pudsey");

    cy.get("#login").click();
  });

  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });
  });

  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });

  it("can add a holiday and creates a holiday dashboard", () => {
    cy.get('input[name="startDate"]')
    .type("2020-20-02")
    .should("have.value", "2020-20-02");

    cy.get('input[name="endDate"]')
      .type("2020-01-03")
      .should("have.value", "2020-01-03");

    cy.get('input[name="location"]')
      .type("Kiev")
      .should("have.value", "Kiev");
      
    cy.get("#submit").click();

    cy.location("pathname").should("eq", "/dashboard");
  });

describe("Dashboard page", () => {
  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });

  it("has a button to logout", () => {
    cy.get(".logout").should("contain", "Logout");
  });
});
