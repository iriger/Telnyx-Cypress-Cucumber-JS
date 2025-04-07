export class PricingPage {
  pricingPageTitle() {
    return cy.get(".c-fGbiyG > .c-PJLV");
  }
  pricingPageDescription() {
    return cy.get(".c-buvHyO-ikgkOAw-css > .c-PJLV");
  }
  firstSection() {
    return cy.get("div.c-jKyrFd-bVdWhF-cardTheme-green");
  }
  firstSectionTitle() {
    return cy.get(".c-jKyrFd > .c-fNZqWL");
  }
  secondSection() {
    return cy.get(".c-fGMpXm.c-hApKap");
  }
  secondSectionTitle() {
    return cy.get(".c-hApKap > .c-fNZqWL");
  }
  allBenefitsSection() {
    return cy.get("#enjoy-all-the-benefits-at-no-extra-cost");
  }
  allBenefitsBlocks() {
    return cy.get("ul.c-cUhiIV li");
  }
  benefitBlockTitle(index) {
    const selectors = {
      1: "#599Qs9ih0ykXM1lAe3zMqv",
      2: "#3qDfqRTIdq5MAy3eUq3lCp",
      3: "#7m7wH75h848E7Pjq9C5L1d",
         };
     const selector = selectors[index];
     return cy.get(selector);
  }
  communicationsSection() {
    return cy.get("#communications > .c-fKwEGa");
  }
  messagingApiOption() {
    return cy.get(
      "#communications > :nth-child(2) > :nth-child(1) > .c-uXJmG > .c-iNaFFq > .c-dnmyni"
    );
  }

  visitPricingPage() {
    cy.visit("/pricing");
  }
  messagingApiSelect() {
    this.messagingApiOption().click();
  }
}
