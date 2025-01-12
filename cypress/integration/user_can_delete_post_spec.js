describe("Delete button", () => {
  it("deletes the post when signed in", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone4@example.com");
    cy.get("#password").type("password4");
    cy.get("#first_name").type("Bob");
    cy.get("#last_name").type("Smith");
    cy.get("#dob").type("2022-05-16");
    cy.get("#submit").click();
    cy.get(".timelinepage").click();

    cy.get(".new-field").type("Delete test");
    cy.get(".post-button").click();

    cy.get(".posts").should("contain", "Delete test");
    cy.get(".posts").should("contain", "Bob Smith");

    cy.get('.posts').find('.dltbtn').click();

    cy.get('.posts').should("not.contain", "Delete test");
  });
});