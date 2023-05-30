class MarketplacePage {

  elements = {

    menulist :() => cy.xpath('//span[@role="button"]//*[name()="svg"]'),
    MarketplaceMenu :() => cy.xpath('//a[normalize-space()="Marketplace"]'),
    searchplayer :() => cy.xpath ('//div[contains(@class,"css-1c9f41h-placeholder")]'),
    listofplayermoments :() => cy.xpath("//a[text()='View Listing']"),
    selectandbuybutton :() => cy.xpath("//a[@class='chakra-button css-1fe68wh']"),
    buymomentbutton :() => cy.xpath("//button[@data-testid='buyMoment']"),

    confirmcart :() => cy.xpath("//h1[@class='sc-ee96c3f6-2 jTQkIp']"),
    //first_element :() => cy.xpath("//div[@data-testid='page-search']//div[@class='css-1wveqnu']/*/*[1]")
    //first_element :() => cy.xpath("//div[@data-testid='page-search']/div[@class='css-k008qs']/div[@class='css-2j7eoo']/div[@class='css-1wveqnu']/div[@class='css-1850lbl']/div[1]/div[1]/div[1]/div[1]/a[1]"),
    
    
    selectMomentOption :() => cy.xpath("//div[@data-testid='scrollable-listings']/*[2]/*/*/*/*[1]/span[1]"),

    first_element :() => cy.xpath("//div[@class='css-1850lbl']/div[1]"),

    playerdetailsconfirmation :() => cy.xpath('//h1[@class="chakra-heading css-1fctdso"]'),

    cotinuetobuy :() => cy.get('[data-testid="gating-dapperAccountCreationModal-confirm"]')
  }

  searchplayerFind(player){
    this.elements.menulist().click()
    this.elements.MarketplaceMenu().click()
    this.elements.searchplayer().click().type("LeBron James{enter}")
  }

  clickOnSpecificPlayer(player){
    this.searchplayerFind(player)
    this.elements.listofplayermoments().invoke('show')
    this.elements.first_element().invoke('show').click()
  }

  clickOnSelectandBuy(player){
    this.searchplayerFind(player)
    this.clickOnSpecificPlayer()
    this.elements.selectandbuybutton().click()   
    this.elements.selectMomentOption().invoke('show').click()
    this.elements.buymomentbutton().click()
    this.elements.cotinuetobuy().click()

  }
}
module.exports = new MarketplacePage()