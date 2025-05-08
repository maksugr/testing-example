/// <reference types="cypress" />

describe("App integration", () => {
    it("does not show success message when count < 10", () => {
        cy.visit("/");

        cy.contains("✅").should("not.exist");
        for (let i = 0; i < 5; i++) {
            cy.contains("Increment").click();
        }
        cy.contains("✅").should("not.exist");
    });

    it("shows success message when count >= 10", () => {
        cy.visit("/");

        for (let i = 0; i < 10; i++) {
            cy.contains("Increment").click();
        }
        cy.contains("✅ 10").should("exist");
    });

    it("shows success message when count < 10 after count 25", () => {
        cy.visit("/");

        for (let i = 0; i < 25; i++) {
            cy.contains("Increment").click();
        }
        for (let i = 20; i > 0; i--) {
            cy.contains("Decrement").click();
        }
        cy.contains("✅").should("not.exist");
    });

    it("shows red box when count < 10", () => {
        cy.visit("/");

        cy.get('[data-testid="color-box"]')
            .should("have.css", "background-color")
            .and("equal", "rgb(255, 0, 0)");
        for (let i = 0; i < 5; i++) {
            cy.contains("Increment").click();
        }
        cy.get('[data-testid="color-box"]')
            .should("have.css", "background-color")
            .and("equal", "rgb(255, 0, 0)");
    });

    it("shows green box when count >= 10", () => {
        cy.visit("/");

        for (let i = 0; i < 10; i++) {
            cy.contains("Increment").click();
        }
        cy.get('[data-testid="color-box"]')
            .should("have.css", "background-color")
            .and("equal", "rgb(0, 128, 0)");
    });
});
