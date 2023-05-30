import HomePage from "../support/pages/HomePage"
import MarketplacePage from "../support/pages/MarketplacePage"


it("should show details of specific player", () => {
    HomePage.visit();
    MarketplacePage.clickOnSpecificPlayer("LeBron James{enter}");
    MarketplacePage.elements.playerdetailsconfirmation().contains('text', "LeBron James")
})