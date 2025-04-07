export class HomePage {
  pricingLink() {
    return cy.get("a > .c-ghTrAK > .c-swQxl");
  }
  productsLink() {
    return cy.get("#main-menu-content > button:first");
  }
  productsButton() {
    return cy.get("#main-menu-content > button:first > .c-swQxl");
  }
  productsModal() {
    return cy.get(".c-jLWzSx");
  }
  solutionsButton() {
    return cy.get("#main-menu-content > button").eq(1);
  }
  solutionsModal() {
    return cy.get(".c-jLWzSx");
  }
  allSolutionsLink() {
    return cy.xpath("//p[normalize-space()='See all solutions']");
  }
  moreInfoSection() {
    return cy.get(".c-gvjiJA > .c-jpDoWL");
  }
  selectedArtile() {
    return cy.get("[id*='ai-self-service-system']");
  }
  selectedArtileTitle() {
    return cy.get(".c-hfgiSY > :nth-child(3) > .c-PJLV");
  }
  footer() {
    return cy.get(".c-hfgiSY-ildsFlb-css");
  }
  selectedLinkFooter() {
    return cy.get(":nth-child(5) > .c-cTLmKz > :nth-child(4) > .c-fZcwcz");
  }
  selectedLinkFooterTitle() {
    return cy.get("h1.c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false");
  }

  visitHomePage() {
    cy.visit("/");
  }
  navigateToPricingPage() {
    this.pricingLink().click({force: true});
  }
  productsLinkClick() {
    this.productsLink().click({force: true});
  }
  solutionsButtonClick() {
    this.solutionsButton().click({force: true});
  }
  allSolutionsLinkClick() {
    this.allSolutionsLink().click({force: true});
  }
  selectArtile() {
    this.selectedArtile().click({force: true});
  }
  selectLinkFooter() {
    this.selectedLinkFooter().click({force: true});
  }
}
