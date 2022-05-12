describe("Timeline", () => {
  it("can submit posts, when signed in, and view them with email attached", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone3@example.com");
    cy.get("#password").type("password3");
    cy.get("#submit").click();


    // submit a post
    // cy.visit("/posts");
    cy.contains("New post").click();

    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    cy.get(".posts").should("contain", "Hello, world!");
    cy.get(".posts").should("contain", "someone3@example.com");
  });
});
