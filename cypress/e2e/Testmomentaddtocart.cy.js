import HomePage from "../support/pages/HomePage"
import MarketplacePage from "../support/pages/MarketplacePage"
 
  
  it("should be able add a moment to cart", () => {
    HomePage.visit();
    MarketplacePage.clickOnSelectandBuy("LeBron James{enter}")
    HomePage.login(Cypress.env('email'), Cypress.env('password'))
    MarketplacePage.confirmcart.should('exist')
 });