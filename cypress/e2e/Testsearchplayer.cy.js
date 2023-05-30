import HomePage from "../support/pages/HomePage"
import MarketplacePage from "../support/pages/MarketplacePage"
 
  
  it("should search for a player", () => {
    HomePage.visit();
    MarketplacePage.searchplayerFind("LeBron James{enter}");
 });