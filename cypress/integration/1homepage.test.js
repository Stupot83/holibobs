describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has a title", () => {
    cy.get(".link").should("contain", "HOLIBOBS");
  });

  it("has a button to register", () => {
    cy.get(".register").should("contain", "Register");
  });

  it("has a button to login", () => {
    cy.get(".login").should("contain", "Login");
  });
});
